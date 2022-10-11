USE [PYSOPHOS]
GO

/*
[CantidadCreditos]
*/

/******ESTUDIANTES******/
INSERT [dbo].[ESTUDIANTE]
( [Nombre], [Facultad], [Semestre])
VALUES
('Donny Escolar', 'Ing de Sistemas', 10)
INSERT [dbo].[ESTUDIANTE]
( [Nombre], [Facultad], [Semestre])
VALUES
('Daniel Escolar', 'Ing Electronica', 6)
INSERT [dbo].[ESTUDIANTE]
( [Nombre], [Facultad], [Semestre])
VALUES
('Erika Gaviria', 'Psicologia', 8)
INSERT [dbo].[ESTUDIANTE]
( [Nombre], [Facultad], [Semestre])
VALUES
('Alfredo Escolar', 'Matematicas', 6)

/******MAESTROS******/

/******CURSOS******/
INSERT [dbo].[CURSO]
([Nombre], [NombrePrerrequisito], [NumeroCreditos], [Cupos], [IdMaestro])
VALUES
('Filosofia', 'Lectura', 3, 20, 1)
INSERT [dbo].[CURSO]
([Nombre], [NombrePrerrequisito], [NumeroCreditos], [Cupos], [IdMaestro])
VALUES
('Caribe', 'Competencias', 2, 25, 1)
INSERT [dbo].[CURSO]
([Nombre], [NombrePrerrequisito], [NumeroCreditos], [Cupos], [IdMaestro])
VALUES
('Backend', 'Algoritmia', 3, 20, 1)


/******R_CURSO_ESTUDIANTE******/
INSERT [dbo].[R_CURSO_ESTUDIANTE]
([IdCurso], [IdEstudiante])
VALUES
(1, 1)
INSERT [dbo].[R_CURSO_ESTUDIANTE]
([IdCurso], [IdEstudiante])
VALUES
(2, 1)
INSERT [dbo].[R_CURSO_ESTUDIANTE]
([IdCurso], [IdEstudiante])
VALUES
(1, 2)