class YoTePresto:
    def __init__(self, monto_unitario, solicitudes_diarias, tasa_promedio, plazo_promedio):
        self.monto_unitario = monto_unitario
        self.solicitudes_diarias = solicitudes_diarias
        self.tasa_promedio = tasa_promedio
        self.plazo_promedio = plazo_promedio
        self.acumulado = 0
        self.monto_ingresado = 0
        self.monto_egresado = 0

    def diario(self):
        self.acumulado += ((self.acumulado * self.tasa_promedio) / 365)
        egreso = ((self.acumulado / self.plazo_promedio) / 365)
        ingreso = self.monto_unitario * self.solicitudes_diarias
        self.acumulado += ingreso - egreso
        self.monto_ingresado += ingreso
        self.monto_egresado += egreso

    def corrida(self, años):
        for _ in range(int(años * 365)):
            self.diario()
        print(f"Despues de {años} años a tasa {self.tasa_promedio}:",
              f"Acumulado: ${int(self.acumulado)} ",
              f"Ingresado: ${int(self.monto_ingresado)}",
              f"Egresado: ${int(self.monto_egresado)}",
              f"Ganancia: ${int(self.acumulado + self.monto_egresado - self.monto_ingresado)} ({round(((self.acumulado + self.monto_egresado - self.monto_ingresado) / self.acumulado), 2) * 100}%)",
              sep='\n')


for i in range(1, 21):
    ytp = YoTePresto(200, 2, 0.18, 2)
    ytp.corrida(i/2)
    print('')
