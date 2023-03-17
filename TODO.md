# Tasks to do

ALL NEW COMPONENTS YOU MAKE SHOULD BE IMPORTED TO App.js FUNCTION, AND SHOULD HAVE A RIGHT PLACE. SO, WATCH DETAILS, TO GET INFORMATION ABOUT COMPONENTS YOU MAKE

1. Edit public/index.html and public/manifest.json 
    - details: edit name of site, and description (name of app you're making "Hello React"). Name of site and description should represent the name of app, it's the aim.
    # 2 минуты Алексеевы  
2. Make a MainWrapper.js file, and make component called MainWrapper. 
    - details: The component MainWrapper should be a container for every other container you will make.
    # 5 минуты Алексеевы 
3. Make a Hello.js file, and make Hello component. 
    - details: Make a request to backend (when initialization, better use useEffect() function from react) to get message. To see route you should make request to, check out REST_API.md. When backend is not accessible, not running, message should be "Loading..." instead of the message you get from backend 
    # Материалы
    useEffect and useState: https://www.youtube.com/watch?v=wYvIM1SU1hw&t=345s&ab_channel=Ateros
    axios: https://www.youtube.com/watch?v=fDVhl3DGkD0
    Error: https://www.youtube.com/watch?v=0YwYEOpq9q0&ab_channel=CalebCurry
    conditional: https://www.youtube.com/watch?v=hzB0CvJANn8&ab_channel=%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0web-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8FConstcode
    snakbar: https://www.youtube.com/watch?v=v6q0d5AvpXc&ab_channel=WebOutSource
    # 15 минут Алексеевских
4. Make a SearchBar.js file, and make SearchBar component, also make searchInfo.js file which will contain javascript object, and which you will use to obtain information from.
    - details: SearchBar component should map from object(s) in searchInfo.js file, it should return either item from object or nothing (because, it doesn't exist in searchInfo.js file). Write films you like in searchInfo.js, so, it should look like (it should contain name of film, and year!):
    - Minimal amount of films: 5 films
    <pre>
    {
        name: "Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
        my_rating: "9/10"
    }
    </pre>
    https://www.youtube.com/watch?v=C-AFpwNrPRU
    # 10 минут Алексеевских
5. Make a SubmitEmail.js, and SubmitEmail component.
    - details: USE AXIOS FOR THIS TASK; user should input his email, and it should be submitted to the route (see REST_API.md), also, then message from response should be displayed, like: Successfully submitted email: {message}. Also, if something goes wrong, error message should be made, and displayed. 
    # 15 минут Алексеевских
6. Make a Personal.js, and a Personal component.
    - details: This component should render some information about you, picture, name, link to github account.
    # 5 минут Алексеевских
7. Make a Header.js and a Header component.
    - details: this component should display navigation for the page, when you click, you should be taken to the part of site you want.
    - additionally: should display login or account depends on what props is given to the component. If user then display account, if guest then display login
    NavigationBar: https://www.youtube.com/watch?v=bdOHxlrS5UM&ab_channel=TovCode
    # 10 минут Алексевских
