; Напишите программу вычитания содержимого регистров X и Y из регистра D
  
  org $8000

 	ldd #$6666
	ldx #$4444
	ldy #$2222

	stx $00
	subd $00

	sty $00
	subd $00

hlt