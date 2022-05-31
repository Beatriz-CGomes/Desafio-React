
import styles from './Banner.module.css'
import bannerpro from '../../img/bannerpro.png'


function Banner() {
    return (
        
      
      <section className={styles.banner_container}>
         
        <h1>Encontre a hospedagem perfeita com os melhores preços </h1>
        <br></br>
       
  
       <div className="alinhar">
   
        <img src={bannerpro} alt="banner" />
        
        <img src={bannerpro} alt="banner" />
        
  
         
  
       </div>
     
      
  
  
  
      </section>
     
    )
  }
  
  export default Banner