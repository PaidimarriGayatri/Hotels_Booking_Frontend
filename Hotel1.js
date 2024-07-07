let hotels = [
    {
        "id": 1,
        "name": "Minerva hotel",
        "image": "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=2048x2048&w=is&k=20&c=hKhLRUpl6c1p_6CdUHRLTAR-UEBdR6vml7M5AtCSCL4=",
        "Booking": "Book now",
        "hotel_details":"This luxury hotel boasts an elegant blend of modern design and historic charm, offering stunning views of the Chicago River and a world-class spa."
    },
    {
        "id": 2,
        "name": "Grand Lake hotel",
        "image": "https://media.istockphoto.com/id/184915014/photo/swimming-pool-and-resort-in-cabo-san-lucas-mexico.jpg?s=2048x2048&w=is&k=20&c=aeZPu_xRzkvRnTsMuVNLHDa-4q5r47LS4CKUePaBP9I=",
        "Booking": "Book now",
        "hotel_details":"Nestled between the Spanish Steps and Piazza del Popolo, this opulent hotel features lush terraced gardens and a serene spa, making it a tranquil oasis in the heart of Rome."
    },
    {
        "id": 3,
        "name": "Sarangi Boutique",
        "image": "https://cdn.pixabay.com/photo/2021/09/22/08/35/architecture-6646154_640.jpg",
        "Booking": "Book now",
        "hotel_details":"Located near the Eiffel Tower, this prestigious hotel combines Asian hospitality with French art de vivre, offering luxurious rooms with breathtaking views of Parisian landmarks."
    },
    {
        "id": 4,
        "name": "Eiffel tower",
        "image": "https://cdn.pixabay.com/photo/2016/11/21/17/34/las-vegas-1846684_640.jpg",
        "Booking": "Book now",
        "hotel_details":"This sophisticated hotel provides panoramic views of the city skyline and Mount Fuji, with contemporary decor and exceptional culinary experiences."
    },
    {
        "id": 5,
        "name": "Beaumont hotel",
        "image": "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_640.jpg",
        "Booking": "Book now",
        "hotel_details":"The Oberoi Amarvilas, Agra: Overlooking the iconic Taj Mahal, this lavish hotel features Mughal-inspired architecture and manicured gardens, providing guests with a regal experience."
    },
    {
        "id": 6,
        "name": "Mubarak hotel",
        "image": "https://cdn.pixabay.com/photo/2018/08/06/19/49/design-3588214_640.jpg",
        "Booking": "Book now",
        "hotel_details":"The St. Regis Bali Resort: Set on a pristine beach in Nusa Dua, this resort offers exquisite villas with private pools and a butler service, creating a perfect blend of luxury and tranquility."
    }
]

let img = document.getElementById("image")
hotels.map(({ id, name, image  , hotel_details ,Booking  }) => {
    console.log(id);
    console.log(img);
    img.innerHTML += `
                    <div id="grid-container">
                        <img class="name1" src=${image} alt="" image_name="${image}" hotels_name="${name}" hotels_details="${hotel_details}" booking="${Booking}" style="height: 200px ; width: 200px;">
                        <h3>${name}</h3>
                        <div></div>
                    </div>
        `
        
})

document.querySelectorAll('.name1').forEach(nameElement =>{
    nameElement.addEventListener('click',(e)=>{
    const selectImage=e.target.getAttribute('image_name');
    const hotelsName=e.target.getAttribute('hotels_name');
    const hotels_details=e.target.getAttribute('hotels_details');
    const booking=e.target.getAttribute('booking');
    
    window.location.href=`Details.html?image=${encodeURIComponent(selectImage)}&name=${encodeURIComponent(hotelsName)}&details=${encodeURIComponent(hotels_details)}&booking=${encodeURIComponent(booking)}`
    });
});