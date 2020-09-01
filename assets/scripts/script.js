// create a namespace
const slideshowApp = {};

// function ready
$(function() {
    slideshowApp.init();
})

slideshowApp.init = function() {
    slideshowApp.showPhotos();
}

// Populate bjects with image information for each category
const landmarkSection = [
    {
        landmark: 'Christ the Redeemer',
        city: 'Rio de Janeiro',
        country: 'Brazil',
        altText: 'Christ the Redeemer in Rio de Janeiro Brazil',
        url: 'assets/images/landmarks/christ-the-redeemer-brazil.jpg' // Photo by 4FLY RJ from Pexels
    },
    {
        landmark: 'CN Tower',
        city: 'Toronto',
        country: 'Canada',
        altText: 'CN Tower in Toronto Canada',
        url: 'assets/images/landmarks/cn-tower-toronto.jpg' // Photo by Skitterphoto from Pexels
    },
    {
        landmark: 'Colosseum',
        city: 'Rome',
        country: 'Italy',
        altText: 'Colosseum in Italy Rome',
        url: 'assets/images/landmarks/colosseum-rome-italy.jpg' // Photo by Davi Pimentel from Pexels
    },
    {
        landmark: 'Eiffel Tower',
        city: 'Paris',
        country: 'France',
        altText: 'Eiffel Tower in Paris France',
        url: 'assets/images/landmarks/eiffel-tower-paris.jpg' // Photo by DEDN from Pexels
    },
    {
        landmark: 'Great Wall of China',
        city: 'Beijing',
        country: 'China',
        altText: 'Great Wall of China',
        url: 'assets/images/landmarks/great-wall-of-china.jpg' // Photo by Alex Qian from Pexels
    },
    {
        landmark: 'Machu Picchu',
        city: 'Cuzco',
        country: 'Peru',
        altText: 'Machu Picchu in Peru',
        url: 'assets/images/landmarks/machu-picchu-peru.jpg' // Photo by Amanda Kerr from Pexels
    },
    {
        landmark: 'Statue of Liberty',
        city: 'New York',
        country: 'USA',
        altText: 'Statue of Liberty in New York',
        url: 'assets/images/landmarks/statue-of-liberty-newyork.jpg' // Photo by Daniel Bendig from Pexels
    },
    {
        landmark: 'Sydney Opera House',
        city: 'Sydney',
        country: 'Australia',
        altText: 'Sydney Opera House in Australia',
        url: 'assets/images/landmarks/sydney-opera-house-australia.jpg' // Photo by Mudassir Ali from Pexels
    },
    {
        landmark: 'Taj Mahal',
        city: 'Agra',
        country: 'India',
        altText: 'Taj Mahal in India',
        url: 'assets/images/landmarks/taj-mahal-india.jpg' // Photo by Sudipta Mondal from Pexels
    }
]

const citiesSection = [
    {
        city: 'Berlin',
        country: 'Germany',
        altText: 'City of Berlin',
        url: 'assets/images/cities/berlin-city.jpg' // Photo by Niki Nagy from Pexels
    },
    {
        city: 'Chicaco',
        country: 'USA',
        altText: 'City of Chicago',
        url: 'assets/images/cities/chicago-city.jpg' // Photo by Cameron Casey from Pexels
    },
    {
        city: 'Hong Kong',
        country: 'China',
        altText: 'City of Hong Kong',
        url: 'assets/images/cities/hong-kong-city.jpg' // Photo by Jimmy Chan from Pexels
    },
    {
        city: 'London',
        country: 'England',
        altText: 'City of London, England',
        url: 'assets/images/cities/london-city.jpg' // Photo by Dominika Gregušová from Pexels
    },
    {
        city: 'Moscow',
        country: 'Russia',
        altText: 'City of Moscow',
        url: 'assets/images/cities/moscow-city.jpg' // Photo by Алексей Васильев from Pexels
    },
    {
        city: 'New York',
        country: 'USA',
        altText: 'New York City!',
        url: 'assets/images/cities/new-york-city.jpg' // Photo by Quintin Gellar from Pexels
    },
    {
        city: 'San Francisco',
        country: 'USA',
        altText: 'City of San Francisco',
        url: 'assets/images/cities/san-francisco-city.jpg' // Photo by picjumbo.com from Pexels
    },
    {
        city: 'Tokyo',
        country: 'Japan',
        altText: 'City of Tokyo',
        url: 'assets/images/cities/tokyo-city.jpg' // Photo by Negative Space from Pexels
    },
    {
        city: 'Toronto',
        country: 'Canada',
        altText: 'City of Toronto',
        url: 'assets/images/cities/toronto-city.jpg' // Photo by Harrison Haines from Pexels
    }
]

const natureSection = [
    {
        url: 'assets/images/nature/aurora-borealis.jpg', // Photo by Tobias Bjørkli from Pexels
        altText: 'The Aurora Borealis at night time'
    },
    {
        url: 'assets/images/nature/black-bridge.jpg', // Photo by Kaique Rocha from Pexels
        altText: 'Image of a black wooden bridge in a forest'
    },
    {
        url: 'assets/images/nature/deer.jpg', // Photo by Louis from Pexels
        altText: 'Image of a deer in the woods during the winter time'
    },
    {
        url: 'assets/images/nature/dolphins.jpg', // Photo by Jeremy Bishop from Pexels
        altText: 'A photo of three dolphins swimming in the ocean'
    },
    {
        url: 'assets/images/nature/grassland.jpg', // Photo by JACK REDGATE from Pexels
        altText: 'Image of a grassy greenland with two large grassy hills in the background'
    },
    {
        url: 'assets/images/nature/grey-cliff-beside-ocean.jpg', // Photo by Simon Clayton from Pexels
        altText: 'An image of cloud in the sky and a person standing on a cliff overlooking the ocean'
    },
    {
        url: 'assets/images/nature/leaves.jpg', // Photo by Pixabay from Pexels
        altText: 'A picture of blue butterflies on a tree branch'
    },
    {
        url: 'assets/images/nature/mountains.jpg', // Photo by Trace Hudson from Pexels
        altText: 'A photo of a mountain overlooking a grassy green field with a small road running through the field'
    },
    {
        url: 'assets/images/nature/palm-tree.jpg', // Photo by Alex Azabache from Pexels
        altText: 'A photo of a person walking along the beach by a large palm tree'
    }
]
// Add an event listener on buttons and get selected button category and output images

slideshowApp.showPhotos = function() {
    // Landmarks section
    $('#landmarks').on('click', function(){
        // Empty the page of any content
        $('.photoContainer').empty();

        // Loop through the array and store object properties into variables
        landmarkSection.forEach((item) => {
            const listItem = $('<li>');
            const image = $('<img>').attr( { src: item.url, alt: item.altText } );
            const landmarkName = $('<h3>').text(item.landmark);
            const city = $('<h4>').text(item.city);
            const country = $('<h4>').text(item.country);

            // Add items to the page
            listItem.append(image, landmarkName, city, country).addClass('imageContainer');
            
            $('.photoContainer').append(listItem);
        })
    })

    // Cities section
    $('#cities').on('click', function(){
        // Empty the page of any content
        $('.photoContainer').empty();

        // Loop through the array and store object properties into variables
        citiesSection.forEach((item) => {
            const listItem = $('<li>');
            const image = $('<img>').attr('src', item.url);
            const city = $('<h3>').text(item.city);
            const country = $('<h4>').text(item.country);

            // Add items to the page
            listItem.append(image, city, country).addClass('imageContainer');
            
            $('.photoContainer').append(listItem);
        })
    })

    // Nature section
    $('#nature').on('click', function(){
        // Empty the page of any content
        $('.photoContainer').empty();

        // Loop through the array and store object properties into variables
        natureSection.forEach((item) => {
            const listItem = $('<li>');
            const image = $('<img>').attr('src', item.url);

            // Add items to the page
            listItem.append(image).addClass('imageContainer');

            $('.photoContainer').append(listItem);
        })
    })
}


