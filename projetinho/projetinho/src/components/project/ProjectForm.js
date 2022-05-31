import styles from '../project/ProjetForm.module.css'

function ProjectForm() {
    return (
<>
<form action="Confirma" method="get" enctype = "multipart/form-data" autocomplete="on">
    <fieldset>
  
      <legend>Buscar pacotes </legend>

      <div class="input1">
  
     <strong><label for="Origem">Origem:</label></strong> 
            <input type="text" name="Origem:" placeholder="Origem:" size="30"/>

  
            <strong> <label for="Destino">Destino:</label></strong> 
 <input type="text:" name="Destino:" placeholder="Destino:" size="30"/>


  
 <strong><label for="data">Entrada:</label></strong>
  <input type = "date" name = "data" />

<strong><label for="data">Saída:</label></strong>
  <input type = "date" name = "data" />

</div>
        
  <br></br>
  <div class="input">
  <input type="submit" name="enviar" value="Enviar"/>
  <input type="reset"  name="limpar" value="Limpar"/>
</div>
  </fieldset>
  </form>

  </>
        )
    }
    
    export default ProjectForm;