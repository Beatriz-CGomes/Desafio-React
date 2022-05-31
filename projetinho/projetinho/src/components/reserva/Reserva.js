

function Reserva() {
    return (

        <>
            <form action="Confirma" method="get" enctype="multipart/form-data" autocomplete="on">
                <fieldset>

                    <legend>Reservar </legend>

                    <div class="container">

                        <strong><label for="Nome">Nome:</label></strong>
                        <input type="text" name="Nome:" placeholder="Nome:" size="30" />


                        <strong> <label for="CPF">CPF:</label></strong>
                        <input type="number:" name="CPF:" placeholder="CPF:" size="11" />



                        <strong><label for="number">Celular:</label></strong>
                        <input type="number" name="number"  placeholder="Celular:" size="15" />

                        <strong><label for="text">Email:</label></strong>
                        <input type="text" name="text"  placeholder="Email:" size="30" />
<br></br>
                        <strong><label for="Origem">Origem:</label></strong>
                        <input type="text" name="Origem:" placeholder="Origem:" size="30" />


                        <strong> <label for="Destino">Destino:</label></strong>
                        <input type="text:" name="Destino:" placeholder="Destino:" size="30" />



                        <strong><label for="data">Entrada:</label></strong>
                        <input type="date" name="data" />

                        <strong><label for="data">Saída:</label></strong>
                        <input type="date" name="data" />

                    </div>

                    <br></br>
                    <div class="enviar">
                        <input type="submit" name="enviar" value="Enviar" />
                        <input type="reset" name="limpar" value="Limpar" />
                    </div>
                </fieldset>
            </form>


        </>


    )
}

export default Reserva;