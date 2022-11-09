num = int(input("Number please: "))
print(num)

if 2 <= num <= 10:
    v = 2
    factorial = 1
    while v <= num:
        factorial *= v
        es_par = "par" if factorial % 2 == 0 else "impar"
        print(f"factorial de {v} es {factorial} es {es_par}")
        v += 1
else:
    print("No es valido")
