import styles from './Home.module.css'
import bannercapa1 from '../../img/bannercapa1.png'




function Home() {
  return (
      
    <section className={styles.home_container}>
      <h1>Um descontão de pacotes para suas próximas férias </h1>
      <br></br>
      <img src={bannercapa1} alt="banner" />
    



    </section>
   
  )
}

export default Home