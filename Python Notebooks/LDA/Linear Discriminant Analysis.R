rm(list=ls())

set.seed(8888)

# Se suponque que entrenas el algoritmo con el 80 porciento de los datos
# y pruebas con el 20 porciento

indices <- sample(nrow(iris),round(nrow(iris)*0.20))
training_set <- iris[-indices,]
test_set <- iris[indices,]
dim(test_set)


### 1. FUNCIÃN APRIORI: la probabilidad de que una observacion cualquiera pertenezca a la clase k. 

apriori <- function(data, nom_col_clase, clase){
  n_k <- sum(data[,nom_col_clase]==clase)
  n <- nrow(data)
  apriori <- n_k/n
  return(apriori)
}



### 2. FUNCIÓN MEDIA


media <- function(data, nom_col_clase, variables, clase){
  indices <- data[,nom_col_clase] == clase
  data <- data[indices,]
  medias <- c()
  for (variable in variables){
    media <- mean(data[,variable])
    medias <- c(medias, media)
  }
  return(medias)
}



### 3. FUNCIÓN VAR.COVAR

var.covar = function(dataf, nom_col_clase,
                     nom_var_indep) {
  
  dataf = as.data.frame(dataf)
  nn=nrow(dataf)
  clases_unicas=unique(dataf[, nom_col_clase])
  k=length(clases_unicas)
  
  dataf_clase=dataf[dataf[,nom_col_clase] == clases_unicas[1],]
  datos_sel=dataf_clase[,nom_var_indep]
  if (length(nom_var_indep)==1){
    sumatoria=var(datos_sel)*((length(datos_sel)-1)/(nn-k))
  }else{
    sumatoria=cov(datos_sel)*((nrow(datos_sel)-1)/(nn-k))
  }
  
  for (i in clases_unicas[-1])
  {
    dataf_clase=dataf[dataf[,nom_col_clase] == i,]
    datos_sel=dataf_clase[,nom_var_indep]
    if (length(nom_var_indep)==1){
      sumatoria=var(datos_sel)*((length(datos_sel)-1)/(nn-k))+sumatoria
    }else{
      sumatoria=cov(datos_sel)*((nrow(datos_sel)-1)/(nn-k))+sumatoria
    }
  }
  
  return(sumatoria)
}



# DELTA MULTIVARIADO


### 4. FUNCIÓN DELTA

delta <- function(x, apriori, media, var.covar){
  
  if(length(x)==1){
    delta_multi <- x * media / var.covar - (1/2)*media*media/var.covar+log(apriori)
  }else{
    I = diag(1,ncol(var.covar))
    matriz_inversa <- solve(var.covar,I)
    delta_multi <- x %*% matriz_inversa %*% as.matrix(media) -(1/2)*media %*% matriz_inversa %*% media+log(apriori)
  }
  return(delta_multi)
}



### 5. FUNCIÓN CLASIFICA

clasifica <- function(x, apriori, media, var.covar){
  
  deltas <- c()
  indices <- length(apriori)
  
  for (i in 1:indices){
    delta_clasifica <- delta(x, apriori[i], media[,i], var.covar)
    deltas <- c(deltas, delta_clasifica)
  }
  
  clase_indice <- which.max(deltas)
  clase_final <- clases[clase_indice]
  
  return(clase_final)
  
}




### 6. VALIDACiÓN DEL MODELO
# Esto es lo que se modifica para ahacer las pruebas
fun=c(3)
clases <- unique(training_set$Species)
variables_independientes <- names(test_set[,1:4])[fun]

x <- test_set[,fun]
x <- as.matrix(x)
#Hasta aqui

apriori_clases <- c()
for (clase in clases){
  d_apriori <- apriori(training_set,"Species", clase)
  apriori_clases <- c(apriori_clases, d_apriori)
  
}

apriori_clases


medias_clases <- c()
for (clase in clases){
  d_medias <- media(training_set,'Species',variables_independientes,clase)
  medias_clases <- c(medias_clases, d_medias)
}

medias_clases <- matrix(medias_clases, length(d_medias), length(clases))
medias_clases


d_var.covar <- var.covar(training_set,'Species',variables_independientes)
d_var.covar



clases_test_set <- c()


for (row in 1:nrow(x)){
  clasifica_fila <- clasifica(x[row,], apriori_clases, medias_clases, d_var.covar)
  clases_test_set <- c(clases_test_set, as.character(clasifica_fila))
  
}


clases_test_set

accuracy <- sum(test_set$Species == clases_test_set) / nrow(test_set)
accuracy

