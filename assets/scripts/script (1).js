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
        url: 'assets/images/landmarks/christ-the-redeemer-brazil.jpg' // Photo by 4FLY RJ from Pexels
    },
    {
        landmark: 'CN Tower',
        city: 'Toronto',
        country: 'Canada',
        url: 'assets/images/landmarks/cn-tower-toronto.jpg' // Photo by Skitterphoto from Pexels
    },
    {
        landmark: 'Colosseum',
        city: 'Rome',
        country: 'Italy',
        url: 'assets/images/landmarks/colosseum-rome-italy.jpg' // Photo by Davi Pimentel from Pexels
    },
    {
        landmark: 'Eiffel Tower',
        city: 'Paris',
        country: 'France',
        url: 'assets/images/landmarks/eiffel-tower-paris.jpg' // Photo by DEDN from Pexels
    },
    {
        landmark: 'Great Wall of China',
        city: '',
        country: 'China',
        url: 'assets/images/landmarks/great-wall-of-china.jpg' // Photo by Alex Qian from Pexels
    },
    {
        landmark: 'Machu Picchu',
        city: 'Cuzco',
        country: 'Peru',
        url: 'assets/images/landmarks/machu-picchu-peru.jpg' // Photo by Amanda Kerr from Pexels
    },
    {
        landmark: 'Statue of Liberty',
        city: 'New York',
        country: 'USA',
        url: 'assets/images/landmarks/statue-of-liberty-newyork.jpg' // Photo by Daniel Bendig from Pexels
    },
    {
        landmark: 'Sydney Opera House',
        city: 'Sydney',
        country: 'Australia',
        url: 'assets/images/landmarks/sydney-opera-house-australia.jpg' // Photo by Mudassir Ali from Pexels
    },
    {
        landmark: 'Taj Mahal',
        city: 'Agra',
        country: 'India',
        url: 'assets/images/landmarks/taj-mahal-india.jpg' // Photo by Sudipta Mondal from Pexels
    }
]

const citiesSection = [
    {
        city: 'Berlin',
        country: 'Germany',
        url: 'assets/images/cities/berlin-city.jpg' // Photo by Niki Nagy from Pexels
    },
    {
        city: 'Chicaco',
        country: 'USA',
        url: 'assets/images/cities/chicago-city.jpg' // Photo by Cameron Casey from Pexels
    },
    {
        city: 'Hong Kong',
        country: 'China',
        url: 'assets/images/cities/hong-kong-city.jpg' // Photo by Jimmy Chan from Pexels
    },
    {
        city: 'London',
        country: 'England',
        url: 'assets/images/cities/london-city.jpg' // Photo by Dominika Gregušová from Pexels
    },
    {
        city: 'Moscow',
        country: 'Russia',
        url: 'assets/images/cities/moscow-city.jpg' // Photo by Алексей Васильев from Pexels
    },
    {
        city: 'New York',
        country: 'USA',
        url: 'assets/images/cities/new-york-city.jpg' // Photo by Quintin Gellar from Pexels
    },
    {
        city: 'San Francisco',
        country: 'USA',
        url: 'assets/images/cities/san-francisco-city.jpg' // Photo by picjumbo.com from Pexels
    },
    {
        city: 'Tokyo',
        country: 'Japan',
        url: 'assets/images/cities/tokyo-city.jpg' // Photo by Negative Space from Pexels
    },
    {
        city: 'Toronto',
        country: 'Canada',
        url: 'assets/images/cities/toronto-city.jpg' // Photo by Harrison Haines from Pexels
    }
]

const natureSection = [
    {
        url: 'assets/images/nature/aurora-borealis.jpg' // Photo by Tobias Bjørkli from Pexels
    },
    {
        url: 'assets/images/nature/black-bridge.jpg' // Photo by Kaique Rocha from Pexels
    },
    {
        url: 'assets/images/nature/deer.jpg' // Photo by Louis from Pexels
    },
    {
        url: 'assets/images/nature/dolphins.jpg' // Photo by Jeremy Bishop from Pexels
    },
    {
        url: 'assets/images/nature/grassland.jpg' // Photo by JACK REDGATE from Pexels
    },
    {
        url: 'assets/images/nature/grey-cliff-beside-ocean.jpg' // Photo by Simon Clayton from Pexels
    },
    {
        url: 'assets/images/nature/leaves.jpg' // Photo by Pixabay from Pexels
    },
    {
        url: 'assets/images/nature/mountains.jpg' // Photo by Trace Hudson from Pexels
    },
    {
        url: 'assets/images/nature/palm-tree.jpg' // Photo by Alex Azabache from Pexels
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
            const image = $('<img>').attr('src', item.url);
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


