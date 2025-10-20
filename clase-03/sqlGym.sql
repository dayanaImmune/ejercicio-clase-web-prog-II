use gym;


alter table cliente add  column  fk_plan int not null;
alter table cliente add foreign key (fk_plan) references plan(idplan);

-- Insertar datos
INSERT INTO plan(nombre, precio) VALUES
("PLAN VIP", 89.7),
("PLAN premium", 60),
("PLAN basico", 30);

-- buscar  datos de una tabla
SELECT idplan, nombre
from plan;

-- eliminar datos
delete from plan 
where idplan >=4;

-- modificar datos
update plan set nombre = "plan escencial"
where idplan = 3;