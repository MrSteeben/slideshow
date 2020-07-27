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
        url: 'assets/images/landmarks/christ-the-redeemer-brazil.jpg'
    },
    {
        landmark: 'CN Tower',
        city: 'Toronto',
        country: 'Canada',
        url: 'assets/images/landmarks/cn-tower-toronto.jpg'
    },
    {
        landmark: 'Colosseum',
        city: 'Rome',
        country: 'Italy',
        url: 'assets/images/landmarks/colosseum-rome-italy.jpg'
    },
    {
        landmark: 'Eiffel Tower',
        city: 'Paris',
        country: 'France',
        url: 'assets/images/landmarks/eiffel-tower-paris.jpg'
    },
    {
        landmark: 'Great Wall of China',
        city: '',
        country: 'China',
        url: 'assets/images/landmarks/great-wall-of-china.jpg'
    },
    {
        landmark: 'Machu Picchu',
        city: 'Cuzco',
        country: 'Peru',
        url: 'assets/images/landmarks/machu-picchu-peru.jpg'
    },
    {
        landmark: 'Statue of Liberty',
        city: 'New York',
        country: 'USA',
        url: 'assets/images/landmarks/statue-of-liberty-newyork.jpg'
    },
    {
        landmark: 'Sydney Opera House',
        city: 'Sydney',
        country: 'Australia',
        url: 'assets/images/landmarks/sydney-opera-house-australia.jpg'
    },
    {
        landmark: 'Taj Mahal',
        city: 'Agra',
        country: 'India',
        url: 'assets/images/landmarks/taj-mahal-india.jpg'
    }
]

const citiesSection = [
    {
        city: 'Berlin',
        country: 'Germany',
        url: 'assets/images/cities/berlin-city.jpg'
    },
    {
        city: 'Chicaco',
        country: 'USA',
        url: 'assets/images/cities/chicago-city.jpg'
    },
    {
        city: 'Hong Kong',
        country: 'China',
        url: 'assets/images/cities/hong-kong-city.jpg'
    },
    {
        city: 'London',
        country: 'England',
        url: 'assets/images/cities/london-city.jpg'
    },
    {
        city: 'Moscow',
        country: 'Russia',
        url: 'assets/images/cities/moscow-city.jpg'
    },
    {
        city: 'New York',
        country: 'USA',
        url: 'assets/images/cities/new-york-city.jpg'
    },
    {
        city: 'San Francisco',
        country: 'USA',
        url: 'assets/images/cities/san-francisco-city.jpg'
    },
    {
        city: 'Tokyo',
        country: 'Japan',
        url: 'assets/images/cities/tokyo-city.jpg'
    },
    {
        city: 'Toronto',
        country: 'Canada',
        url: 'assets/images/cities/toronto-city.jpg'
    }
]

const natureSection = [
    {
        url: 'assets/images/nature/aurora-borealis.jpg'
    },
    {
        url: 'assets/images/nature/black-bridge.jpg'
    },
    {
        url: 'assets/images/nature/deer.jpg'
    },
    {
        url: 'assets/images/nature/dolphins.jpg'
    },
    {
        url: 'assets/images/nature/grassland.jpg'
    },
    {
        url: 'assets/images/nature/grey-cliff-beside-ocean.jpg'
    },
    {
        url: 'assets/images/nature/leaves.jpg'
    },
    {
        url: 'assets/images/nature/mountains.jpg'
    },
    {
        url: 'assets/images/nature/palm-tree.jpg'
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


