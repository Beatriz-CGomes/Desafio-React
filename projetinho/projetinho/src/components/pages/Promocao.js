import styles from './Promocao.module.css'
import text1 from '../../img/text1.png'
import text2 from '../../img/text2.png'



function Promocao() {
  return (
      
    
    <section className={styles.promo_container}>
       
      <p>Os melhores pacotes para sua viagem  </p>
      <br></br>
     

     <div className="alinhar">
 
      <img src={text1} alt="banner" />
      
     <img src={text2} alt="banner" />

       
     <img src={text1} alt="banner" />

       
     <img src={text2} alt="banner" />
     
     <img src={text1} alt="banner" />

       

     </div>

     
   
    



    </section>
   
  )
}

export default Promocao