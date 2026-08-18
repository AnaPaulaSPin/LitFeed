@echo off

start "Backend" cmd /k "cd /d backend && mvnw.cmd spring-boot:run"

start "Frontend" cmd /k "cd /d front-end && ng serve -o"