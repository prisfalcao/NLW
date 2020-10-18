const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela
   /* await saveOrphanage(db, {
        lat: "-30.0334382",
        lng: "-51.1191486",
        name: "Lar do Pinti",
        about: "Uma instituição que acolhe os necessitados, vulgo Pris, Bolo, Elvis e Pudol",
        images: [
            "https://images.unsplash.com/photo-1567057420215-0afa9aa9253a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ].toString(),

        instructions: "Entre em contato conosco para pedir informações mais precisas sobre você pode nos ajudar em seu tempo livre.",
        opening_hours: "Horário de visitas: das 10:00 às 17:00",
        open_on_weekends: "0"
   }) */

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar por id
   /* const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "4"')
    console.log(orphanage)

    //deletar dado da tabela
   /* console.log(await db.run('DELETE FROM orphanages WHERE id = "3"'))
    console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'))
    console.log(await db.run('DELETE FROM orphanages WHERE id = "5"'))
    console.log(await db.run('DELETE FROM orphanages WHERE id = "6"')) */

})