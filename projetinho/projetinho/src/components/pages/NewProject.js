import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject() {
    return (
 <div className={styles.newproject_container}>
     <h1>Agenda sua consulta!</h1>
 <ProjectForm />



 </div>
    
    )

}

export default NewProject
