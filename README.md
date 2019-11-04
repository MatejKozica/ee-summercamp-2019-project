# ee-summercamp-2019-project

Projekt je namijenjen Extension Engine Summer Camp-u

## Kako pokrenuti aplikaciju

#### Backend

Nakon cloneanja repositorija, navigirati se u folder backend te skinuti node pakete komandom:
```
npm install
```
Navigirati se u folder backend/src te pokrenuti aplikaciju komandom:
```
nodemon app.js
```

#### Frontend
Navigirati se u folder frontend/my-app te skinuti node pakete komandom:
```
npm install
```
Navigirati se u folder frontend/my-app/src te pokrenuti aplikaciju komandom:
```
npm run start
```



```SQL
DECLARE @REGISTRY_HIVE VARCHAR (255)
DECLARE @REGISTRY_KEY VARCHAR (255)
DECLARE @REGISTRY_VALUE VARCHAR (255)

SET  @REGISTRY_HIVE = 'HKEY_LOCAL_MACHINE'
SET  @REGISTRY_KEY =  'Software\Microsoft\MSSQLServer\Setup'
SET  @REGISTRY_VALUE = 'SQLPath'

EXEC
  @returnvalue = master.dbo.xp_instance_regread
  @REGISTRY_HIVE,@REGISTRY_KEY,@REGISTRY_VALUE,
  @path output, 'no_output'

IF @path is not null
 BEGIN
  print 'Exists !'
  print @path
 END
  ELSE
  BEGIN
   print 'Does not exist !'
  END
  ```
