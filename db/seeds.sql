INSERT INTO department (name)
VALUES
  ('Warehouse'),
  ('Sales'),
  ('HR'),
  ('Finance'),
  ('Admin');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Dock Worker', 120000, 1),
  ('Foreman', 150000, 1),
  ('Salesperson', 80000, 2),
  ('Sales Lead', 100000, 2),
  ('HR Rep', 190000, 3),
  ('HR Lead', 250000, 3),
  ('Accountant', 125000, 4),
  ('Financing Team Lead', 165000, 4),
  ('Regional Manager', 350000, 5),
  ('Admin Assistant', 60000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Michael', 'Scott', 9, NULL),
  ('Dwight', 'Schrute', 4, 1),
  ('Angela', 'Martin', 8, 1),
  ('Darryl', 'Philbin', 2, 1),
  ('Toby', 'Flenderson', 5, 1),
  ('Oscar', 'Nunez', 8, 1),
  ('Holly', 'Flax', 5, 1),
  ('Ryan', 'Howard', 10, 1),
  ('Jim', 'Halpert', 3, 2),
  ('Pam', 'Beesly', 3, 2),
  ('Philis', 'Vance', 3, 2),
  ('Stanly', 'Hudson', 3, 2),
  ('Kevin', 'Malone', 7, 3),
  ('Lonnis', 'Collins', 1, 4);
  

