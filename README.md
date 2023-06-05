1. src > context > Context file
2. Creating a context using createContext()
3. Create ContextProvider which has children as a prop
4. Provide value to Context.Provider 

    <Context.Provider value={}>
        {children}
    <Context.Provider/>

5. export context and provider
6. In App.js Wrap the components inside ContextProvider
7. Inside the children component call the state values using useContext()
8. Manupulate the state value with the help of fucntions provided from the context itself





faker,
products data fetch - name, description, price, images
products data render
with help of context api create a CART functionality

