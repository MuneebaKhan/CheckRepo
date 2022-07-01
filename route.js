var app = angular.module("myApp", ['ngRoute'])
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html",
            controller: "hct",
        })
        .when("/course", {
            templateUrl: "courses.html",
            controller: "ctr_courses",

        })
        .when("/event", {
            templateUrl: "events.html",
            controller: "ev",

        })
        .when("/Semester", {
            templateUrl: "sem.html",
            controller: "sem",

        })
        .when("/Contact", {
            templateUrl: "contacts.html"

        })
        .when("/about", {
            templateUrl: "about.html",
            controller:"ab"

        })
}])

app.controller("ctr_courses", function ($scope) {
    $scope.z = [{ Name: "Aptech Convocation", description: "Convocation is a special day for a student, it's when they complete their studies after so much dedication and hard work.", img: "convologo.jpg", about: "More", bt: "https://aptech-education.com.pk/convocation.html" },
    { Name: "APTECH VISION", description: " THE BIGGEST SOFTWARE EXHIBITION IN PAKISTAN", img: "vision.png", about: "More", bt: "https://aptech-education.com.pk/Vision19.html" },
    { Name: "Aptech Premier League", description: " APL(Aptech Premier League) Cricket is one of the most favorite and fastest growing sports in Pakistan", img: "apl.png", about: "More", bt: "https://aptech-education.com.pk/cricket.html" },
    { Name: "Techwiz", description: "Techwiz is technology-based competition among ACCP students at Aptech", img: "Techwiz.png", about: "More", bt: "https://aptech-education.com.pk/techwiz.html" }
    ]
})


app.controller("ev", function ($scope) {
    $scope.b = [
        { img: "office.png", title: "Office Automation", link: "https://aptech-education.com.pk/coursedetails.html?course=office" },
        { img: "excel.png", title: "Advance Excel", link: "https://aptech-education.com.pk/coursedetails.html?course=excel" },
        { img: "frontend.png", title: "Frontend Web Development", link: "https://aptech-education.com.pk/coursedetails.html?course=Web" },
        { img: "cplus.png", title: "Programming in C++", link: "https://aptech-education.com.pk/coursedetails.html?course=Cplus" },
        { img: "c.png", title: "Programming in C", link: "https://aptech-education.com.pk/coursedetails.html?course=C" },
        { img: "csharp.png", title: "Programing in C#", link: "https://aptech-education.com.pk/coursedetails.html?course=csharp" },
        { img: "ppt.png", title: "Advance Presentation Techniques", link: "https://aptech-education.com.pk/coursedetails.html?course=mobail" },
        { img: "java.png", title: "Web Application Development in Java EE", link: "https://aptech-education.com.pk/coursedetails.html?course=java" },
        { img: "python.png", title: "Web Development using Python", link: "https://aptech-education.com.pk/coursedetails.html?course=mobail" }
    ]
})


app.controller("sem", function ($scope) {
    $scope.d = [
        {Sem:"(CPISM)",num:"1",pr:"Responsive Website Developer",dr:"6 months",fe:"6000 PM", wr:"Adobe XD"},
        {Sem:"(DISM)",num:"2",pr:"PHP Web Application Developer",dr:"6 months",fe:"6000 PM", wr:"Adobe XD"},
        {Sem:"(HDSE I)",num:"3",pr:"Full Stack Web Developer",pr2:"ASP .NET Developer",dr:"6 months",fe:"6000 PM", wr:"Crud with Angular JS",wr2:"Rest API"},
        {Sem:"(HDSE II)",num:"4",pr:".NET Web & Enterprise Application Developer",pr2:"Cross Platform App Developer",dr:"6 months",fe:"6000 PM", wr:"React Native"},
        {Sem:"(ADSE I)",num:"5",pr:"Data Analytics Professional",dr:"6 months",fe:"6000 PM", wr:"DJango",wr2:"Blockchain"},
        {Sem:"(ADSE II)",num:"6",pr:"Full Stack Application Developer",pr2:"Data Analytics Professional",dr:"6 months",fe:"6000 PM", wr:"IOT Framework"},
        
    ]
})


app.controller("ctr_Faculty", function ($scope) {
    $scope.b = [{ Name: "fatima", Age: "24", Education: "Inter", Salary: "20000" },
    { Name: "Ahad", Age: "28", Education: "Matric", Salary: "30000" },
    { Name: "Narmeen", Age: "29", Education: "Inter", Salary: "40000" },
    { Name: "Saad", Age: "26", Education: "Matric", Salary: "50000" },
    { Name: "Zarmina", Age: "25", Education: "Inter", Salary: "60000" },]
})
app.controller("hct", function ($scope, $timeout, $interval) {
    $scope.img = "2.jpg"
    $timeout(function () {
        $scope.img = "7.jpg";
    }, 1000),
        $scope.t = [
            { imgg: "ld.jpg" }
        ]
    $scope.news = [
        "5,500 Visited Companies ",
        "4,280 Our Ambassadors",
        "9,000 Session Held",
        "5,500 Individual Trained"
    ]
    $scope.item = ""
    $scope.index = 0;

    $interval(function () {
        if ($scope.index < $scope.news.length) {         //0 < 3
            $scope.item = $scope.news[$scope.index];
            $scope.index++;
        }
        else {
            $scope.index = 0;
        }
    }, 1500)
    $scope.rr=2

})
app.controller("ab", function ($scope, $timeout, $interval) {
    $scope.img = "ove.jpg"
    $timeout(function () {
        $scope.img = "aa.jpg";
    }, 1700),
    $scope.dd = [
        {img1:"im1.png",title:"Robert Smith",des:"CEO"},
        {img1:"im2.png",title:"James",des:"HEAD"},
        {img1:"im3.png",title:"Johnson",des:"CONTROLLER"}
    ]


})
