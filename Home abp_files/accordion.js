
// name wise district

let nameWiseDistrictItems = document.querySelectorAll('.name-wise-district-item')
let nameWiseDistrictOptions = document.querySelector('.name-wise-district-options')
const nameWiseDistrict = [
    {
        name: "Delhi",
        districts: [
            {
                districtName: 'Delhi District',
                districtNumber: 721635
            },
            {
                districtName: 'Delhi District',
                districtNumber: 721636
            },
            {
                districtName: 'Delhi District',
                districtNumber: 721637
            },
            {
                districtName: 'Delhi District',
                districtNumber: 721638
            },
            {
                districtName: 'Delhi District',
                districtNumber: 721639
            },
        ]
    },
    {
        name: "Mumbai",
        districts: [
            {
                districtName: 'Mumbai District',
                districtNumber: 721635
            },
            {
                districtName: 'Mumbai District',
                districtNumber: 721636
            },
            {
                districtName: 'Mumbai District',
                districtNumber: 721637
            },
            {
                districtName: 'Mumbai District',
                districtNumber: 721638
            },
            {
                districtName: 'Mumbai District',
                districtNumber: 721639
            },
        ]
    },
    {
        name: "Punjab",
        districts: [
            {
                districtName: 'Punjab District',
                districtNumber: 721635
            },
            {
                districtName: 'Punjab District',
                districtNumber: 721636
            },
            {
                districtName: 'Punjab District',
                districtNumber: 721637
            },
            {
                districtName: 'Punjab District',
                districtNumber: 721638
            },
            {
                districtName: 'Punjab District',
                districtNumber: 721639
            },
        ]
    },
    {
        name: "Assam",
        districts: [
            {
                districtName: 'Assam District',
                districtNumber: 721635
            },
            {
                districtName: 'Assam District',
                districtNumber: 721636
            },
            {
                districtName: 'Assam District',
                districtNumber: 721637
            },
            {
                districtName: 'Assam District',
                districtNumber: 721638
            },
            {
                districtName: 'Assam District',
                districtNumber: 721639
            },
        ]
    },
    {
        name: "Rajasthan",
        districts: [
            {
                districtName: 'Rajasthan District',
                districtNumber: 721635
            },
            {
                districtName: 'Rajasthan District',
                districtNumber: 721636
            },
            {
                districtName: 'Rajasthan District',
                districtNumber: 721637
            },
            {
                districtName: 'Rajasthan District',
                districtNumber: 721638
            },
            {
                districtName: 'Rajasthan District',
                districtNumber: 721639
            },
        ]
    },
]

nameWiseDistrictItems.forEach(item => {
    item.addEventListener('click', ()=> {
        let name = item.textContent.trim()
        populateDistrict(name)
    })
})


function populateDistrict(name){

    nameWiseDistrict.map(item => {
        if(item.name == name){
            nameWiseDistrictOptions.innerHTML = ""
            item.districts.map(district => {
                nameWiseDistrictOptions.innerHTML += `<div class="card-content-block d-flex justify-content-between align-items-center">
                    <p>${district.districtName}</p>
                    <p>${district.districtNumber}</p>
                </div>`
            })
        }
    })
}


// name wise post office 

let nameWisePostItems = document.querySelectorAll('.name-wise-post-item')
let nameWisePostDistrict = document.querySelector('.name-wise-post-district')
let nameWisePostOptions = document.querySelector('.name-wise-post-options')

const nameWisePost = [
    {
        name: 'Delhi',
        districts: [
            {
                districtName: 'District 1',
                posts: [
                    {
                        postName: 'Location 1 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Location 1 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Location 1 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Location 1 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Location 1 Post',
                        postNumber: 721639
                    },
                ]
            },
            {
                districtName: 'District 2',
                posts: [
                    {
                        postName: 'Delhi District 2 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Delhi District 2 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Delhi District 2 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Delhi District 2 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Delhi District 2 Post',
                        postNumber: 721639
                    },
                ]
            },
            {
                districtName: 'District 3',
                posts: [
                    {
                        postName: 'Delhi District 3 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Delhi District 3 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Delhi District 3 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Delhi District 3 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Delhi District 3 Post',
                        postNumber: 721639
                    },
                ]
            },
            {
                districtName: 'District 4',
                posts: [
                    {
                        postName: 'Delhi District 4 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Delhi District 4 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Delhi District 4 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Delhi District 4 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Delhi District 4 Post',
                        postNumber: 721639
                    },
                ]
            },
            {
                districtName: 'District 5',
                posts: [
                    {
                        postName: 'Delhi District 5 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Delhi District 5 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Delhi District 5 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Delhi District 5 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Delhi District 5 Post',
                        postNumber: 721639
                    },
                ]
            },
        ]
    },
    {
        name: 'Mumbai',
        districts: [
            {
                districtName: 'District 1',
                posts: [
                    {
                        postName: 'Mumbai District 1 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Mumbai District 1 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Mumbai District 1 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Mumbai District 1 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Mumbai District 1 Post',
                        postNumber: 721639
                    },
                ]
            },
            {
                districtName: 'District 2',
                posts: [
                    {
                        postName: 'Mumbai District 2 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Mumbai District 2 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Mumbai District 2 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Mumbai District 2 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Mumbai District 2 Post',
                        postNumber: 721639
                    },
                ]
            },
            {
                districtName: 'District 3',
                posts: [
                    {
                        postName: 'Mumbai District 3 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Mumbai District 3 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Mumbai District 3 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Mumbai District 3 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Mumbai District 3 Post',
                        postNumber: 721639
                    },
                ]
            },
            {
                districtName: 'District 4',
                posts: [
                    {
                        postName: 'Mumbai District 4 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Mumbai District 4 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Mumbai District 4 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Mumbai District 4 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Mumbai District 4 Post',
                        postNumber: 721639
                    },
                ]
            },
            {
                districtName: 'District 5',
                posts: [
                    {
                        postName: 'Mumbai District 5 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Mumbai District 5 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Mumbai District 5 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Mumbai District 5 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Mumbai District 5 Post',
                        postNumber: 721639
                    },
                ]
            },
        ]
    },
    {
        name: 'Punjab',
        districts: [
            {
                districtName: 'District 1',
                posts: [
                    {
                        postName: 'Punjab District 1 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Punjab District 1 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Punjab District 1 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Punjab District 1 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Punjab District 1 Post',
                        postNumber: 721639
                    },
                ]
            },
            {
                districtName: 'District 2',
                posts: [
                    {
                        postName: 'Punjab District 2 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Punjab District 2 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Punjab District 2 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Punjab District 2 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Punjab District 2 Post',
                        postNumber: 721639
                    },
                ]
            },
            {
                districtName: 'District 3',
                posts: [
                    {
                        postName: 'Punjab District 3 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Punjab District 3 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Punjab District 3 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Punjab District 3 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Punjab District 3 Post',
                        postNumber: 721639
                    },
                ]
            },
            {
                districtName: 'District 4',
                posts: [
                    {
                        postName: 'Punjab District 4 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Punjab District 4 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Punjab District 4 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Punjab District 4 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Punjab District 4 Post',
                        postNumber: 721639
                    },
                ]
            },
            {
                districtName: 'District 5',
                posts: [
                    {
                        postName: 'Punjab District 5 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Punjab District 5 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Punjab District 5 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Punjab District 5 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Punjab District 5 Post',
                        postNumber: 721639
                    },
                ]
            },
        ]
    },
    {
        name: 'Assam',
        districts: [
            {
                districtName: 'District 1',
                posts: [
                    {
                        postName: 'Assam District 1 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Assam District 1 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Assam District 1 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Assam District 1 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Assam District 1 Post',
                        postNumber: 721639
                    },
                ]
            },
            {
                districtName: 'District 2',
                posts: [
                    {
                        postName: 'Assam District 2 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Assam District 2 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Assam District 2 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Assam District 2 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Assam District 2 Post',
                        postNumber: 721639
                    },
                ]
            },
            {
                districtName: 'District 3',
                posts: [
                    {
                        postName: 'Assam District 3 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Assam District 3 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Assam District 3 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Assam District 3 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Assam District 3 Post',
                        postNumber: 721639
                    },
                ]
            },
            {
                districtName: 'District 4',
                posts: [
                    {
                        postName: 'Assam District 4 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Assam District 4 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Assam District 4 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Assam District 4 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Assam District 4 Post',
                        postNumber: 721639
                    },
                ]
            },
            {
                districtName: 'District 5',
                posts: [
                    {
                        postName: 'Assam District 5 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Assam District 5 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Assam District 5 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Assam District 5 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Assam District 5 Post',
                        postNumber: 721639
                    },
                ]
            },
        ]
    },
    {
        name: 'Rajasthan',
        districts: [
            {
                districtName: 'District 1',
                posts: [
                    {
                        postName: 'Rajasthan District 1 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Rajasthan District 1 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Rajasthan District 1 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Rajasthan District 1 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Rajasthan District 1 Post',
                        postNumber: 721639
                    },
                ]
            },
            {
                districtName: 'District 2',
                posts: [
                    {
                        postName: 'Rajasthan District 2 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Rajasthan District 2 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Rajasthan District 2 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Rajasthan District 2 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Rajasthan District 2 Post',
                        postNumber: 721639
                    },
                ]
            },
            {
                districtName: 'District 3',
                posts: [
                    {
                        postName: 'Rajasthan District 3 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Rajasthan District 3 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Rajasthan District 3 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Rajasthan District 3 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Rajasthan District 3 Post',
                        postNumber: 721639
                    },
                ]
            },
            {
                districtName: 'District 4',
                posts: [
                    {
                        postName: 'Rajasthan District 4 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Rajasthan District 4 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Rajasthan District 4 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Rajasthan District 4 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Rajasthan District 4 Post',
                        postNumber: 721639
                    },
                ]
            },
            {
                districtName: 'District 5',
                posts: [
                    {
                        postName: 'Rajasthan District 5 Post',
                        postNumber: 721635
                    },
                    {
                        postName: 'Rajasthan District 5 Post',
                        postNumber: 721636
                    },
                    {
                        postName: 'Rajasthan District 5 Post',
                        postNumber: 721637
                    },
                    {
                        postName: 'Rajasthan District 5 Post',
                        postNumber: 721638
                    },
                    {
                        postName: 'Rajasthan District 5 Post',
                        postNumber: 721639
                    },
                ]
            },
        ]
    },
]

nameWisePostItems.forEach(item => {
    item.addEventListener('click', () => {
        let name = item.textContent.trim()
        populateDistrictPost(name)
    })
})

function populateDistrictPost(name){
    nameWisePost.map(item => {
        if(item.name == name){
            nameWisePostDistrict.innerHTML = ""
            item.districts.map(district => {
                nameWisePostDistrict.innerHTML += `<li class="list-group-item fw-7 d-flex justify-content-between post-district-item">${district.districtName}
                <i class="fa-solid fa-chevron-right mb-1"></i>
            </li>`
            })
            populateDistrictPostOffice(item.name)
        }
    })
}

function populateDistrictPostOffice(name){
    let cityName = name
    let allDistricts = document.querySelectorAll('.post-district-item')

    allDistricts.forEach(item => {
        item.addEventListener('click', () => {
            let districtName = item.textContent.trim()
            nameWisePost.map(city => {
                if(city.name == cityName){
                    city.districts.map(district => {
                        if(district.districtName.trim() == districtName){
                            nameWisePostOptions.innerHTML = ""
                            district.posts.map(post => {
                                nameWisePostOptions.innerHTML +=   `<div class="card-content-block d-flex justify-content-between align-items-center">
                                <p>${post.postName}</p>
                                <p>${post.postNumber}</p>
                            </div>`
                            })
                        }
                    })
                }
            })
        })
    })

}


// name wise location

const nameWiseLocation = [
    {
        name: 'District 1',
        post: [
            {
                postName: 'Post Office 1',
                location: [
                    {
                        locationName: 'D1 P1 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D1 P1 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D1 P1 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D1 P1 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D1 P1 Location',
                        locationNumber: 721639
                    },
                ]
            },
            {
                postName: 'Post Office 2',
                location: [
                    {
                        locationName: 'D1 P2 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D1 P2 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D1 P2 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D1 P2 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D1 P2 Location',
                        locationNumber: 721639
                    },
                ]
            },
            {
                postName: 'Post Office 3',
                location: [
                    {
                        locationName: 'D1 P3 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D1 P3 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D1 P3 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D1 P4 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D1 P5 Location',
                        locationNumber: 721639
                    },
                ]
            },
            {
                postName: 'Post Office 4',
                location: [
                    {
                        locationName: 'D1 P4 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D1 P4 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D1 P4 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D1 P4 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D1 P4 Location',
                        locationNumber: 721639
                    },
                ]
            },
            {
                postName: 'Post Office 5',
                location: [
                    {
                        locationName: 'D1 P5 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D1 P5 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D1 P5 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D1 P5 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D1 P5 Location',
                        locationNumber: 721639
                    },
                ]
            },
        ]
    },
    {
        name: 'District 2',
        post: [
            {
                postName: 'Post Office 1',
                location: [
                    {
                        locationName: 'D2 P1 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D2 P1 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D2 P1 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D2 P1 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D2 P1 Location',
                        locationNumber: 721639
                    },
                ]
            },
            {
                postName: 'Post Office 2',
                location: [
                    {
                        locationName: 'D2 P2 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D2 P2 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D2 P2 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D2 P2 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D2 P2 Location',
                        locationNumber: 721639
                    },
                ]
            },
            {
                postName: 'Post Office 3',
                location: [
                    {
                        locationName: 'D2 P3 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D2 P3 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D2 P3 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D2 P4 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D2 P5 Location',
                        locationNumber: 721639
                    },
                ]
            },
            {
                postName: 'Post Office 4',
                location: [
                    {
                        locationName: 'D2 P4 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D2 P4 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D2 P4 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D2 P4 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D2 P4 Location',
                        locationNumber: 721639
                    },
                ]
            },
            {
                postName: 'Post Office 5',
                location: [
                    {
                        locationName: 'D2 P5 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D2 P5 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D2 P5 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D2 P5 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D2 P5 Location',
                        locationNumber: 721639
                    },
                ]
            },
        ]
    },
    {
        name: 'District 3',
        post: [
            {
                postName: 'Post Office 1',
                location: [
                    {
                        locationName: 'D3 P1 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D3 P1 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D3 P1 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D3 P1 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D3 P1 Location',
                        locationNumber: 721639
                    },
                ]
            },
            {
                postName: 'Post Office 2',
                location: [
                    {
                        locationName: 'D3 P2 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D3 P2 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D3 P2 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D3 P2 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D3 P2 Location',
                        locationNumber: 721639
                    },
                ]
            },
            {
                postName: 'Post Office 3',
                location: [
                    {
                        locationName: 'D3 P3 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D3 P3 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D3 P3 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D3 P4 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D3 P5 Location',
                        locationNumber: 721639
                    },
                ]
            },
            {
                postName: 'Post Office 4',
                location: [
                    {
                        locationName: 'D3 P4 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D3 P4 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D3 P4 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D3 P4 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D3 P4 Location',
                        locationNumber: 721639
                    },
                ]
            },
            {
                postName: 'Post Office 5',
                location: [
                    {
                        locationName: 'D3 P5 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D3 P5 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D3 P5 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D3 P5 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D3 P5 Location',
                        locationNumber: 721639
                    },
                ]
            },
        ]
    },
    {
        name: 'District 4',
        post: [
            {
                postName: 'Post Office 1',
                location: [
                    {
                        locationName: 'D4 P1 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D4 P1 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D4 P1 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D4 P1 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D4 P1 Location',
                        locationNumber: 721639
                    },
                ]
            },
            {
                postName: 'Post Office 2',
                location: [
                    {
                        locationName: 'D4 P2 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D4 P2 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D4 P2 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D4 P2 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D4 P2 Location',
                        locationNumber: 721639
                    },
                ]
            },
            {
                postName: 'Post Office 3',
                location: [
                    {
                        locationName: 'D4 P3 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D4 P3 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D4 P3 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D4 P4 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D4 P5 Location',
                        locationNumber: 721639
                    },
                ]
            },
            {
                postName: 'Post Office 4',
                location: [
                    {
                        locationName: 'D4 P4 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D4 P4 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D4 P4 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D4 P4 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D4 P4 Location',
                        locationNumber: 721639
                    },
                ]
            },
            {
                postName: 'Post Office 5',
                location: [
                    {
                        locationName: 'D4 P5 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D4 P5 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D4 P5 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D4 P5 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D4 P5 Location',
                        locationNumber: 721639
                    },
                ]
            },
        ]
    },
    {
        name: 'District 5',
        post: [
            {
                postName: 'Post Office 1',
                location: [
                    {
                        locationName: 'D5 P1 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D5 P1 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D5 P1 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D5 P1 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D5 P1 Location',
                        locationNumber: 721639
                    },
                ]
            },
            {
                postName: 'Post Office 2',
                location: [
                    {
                        locationName: 'D5 P2 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D5 P2 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D5 P2 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D5 P2 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D5 P2 Location',
                        locationNumber: 721639
                    },
                ]
            },
            {
                postName: 'Post Office 3',
                location: [
                    {
                        locationName: 'D5 P3 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D5 P3 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D5 P3 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D5 P4 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D5 P5 Location',
                        locationNumber: 721639
                    },
                ]
            },
            {
                postName: 'Post Office 4',
                location: [
                    {
                        locationName: 'D5 P4 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D5 P4 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D5 P4 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D5 P4 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D5 P4 Location',
                        locationNumber: 721639
                    },
                ]
            },
            {
                postName: 'Post Office 5',
                location: [
                    {
                        locationName: 'D5 P5 Location',
                        locationNumber: 721635
                    },
                    {
                        locationName: 'D5 P5 Location',
                        locationNumber: 721636
                    },
                    {
                        locationName: 'D5 P5 Location',
                        locationNumber: 721637
                    },
                    {
                        locationName: 'D5 P5 Location',
                        locationNumber: 721638
                    },
                    {
                        locationName: 'D5 P5 Location',
                        locationNumber: 721639
                    },
                ]
            },
        ]
    },
    
]

let nameWiseLocationItems = document.querySelectorAll('.name-wise-location-item')
let nameWiseLocationPost = document.querySelector('.name-wise-location-post')
let nameWiseLocationOptions = document.querySelector('.name-wise-location-options')

nameWiseLocationItems.forEach(item => {
    item.addEventListener('click', () => {
        let name = item.textContent.trim()
        populateLocation(name)
    })
})

function populateLocation(name){
    nameWiseLocation.map(item => {
        if(item.name == name){
            nameWiseLocationPost.innerHTML = ""
            item.post.map(p => {
                nameWiseLocationPost.innerHTML += `<li class="list-group-item fw-7 d-flex justify-content-between location-post-item">${p.postName}
                <i class="fa-solid fa-chevron-right mb-1"></i>
            </li>`
            })
            populatePostOfficeLocation(item.name)
        }
    })
}


function populatePostOfficeLocation(name){
    let locationPostItem = document.querySelectorAll('.location-post-item')

    locationPostItem.forEach(item => {
        item.addEventListener('click', () => {
            let postOffice = item.textContent.trim()
            nameWiseLocation.map(item => {
                if(item.name == name){
                    item.post.map(p => {
                        if(p.postName == postOffice){
                            nameWiseLocationOptions.innerHTML = ""
                            p.location.map(loc => {
                                nameWiseLocationOptions.innerHTML += `<div class="card-content-block d-flex justify-content-between align-items-center">
                                <p>${loc.locationName}</p>
                                <p>${loc.locationNumber}</p>
                            </div>`
                            })
                        }
                    })
                }
            })
        })
    })
}