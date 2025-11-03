
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import signup from "../componet/signup"
// import Navbar from "../componet/layout/Navbar"
// import Provider from "../componet/layout/Provider"
// import Singleproduct from "../componet/Singleproduct"
import Dashboardlayout from "./pages/Dashboard/Dashboardlayout"
// import Landing from "./pages/Landing"
// import Publicpage from "../componet/layout/publicpage"
import Publicpage from "../componet/layout/Publicpage"

// import Publicpage from "../components/layout/publicpage";




import Adminlayout from "./pages/admin/Adminlayout"
import AuthProvider from "../context/authcontext"
import ProductProvider from "../context/productcontext"
// import ProtectedRoute from "../componet/layout/ProtectedRoute"
import Isadminprotected from "../componet/layout/Isadminprotected"
import { Toaster } from "sonner"
import ForgotPassword from "../componet/layout/Forgetpassword"
import VerifyOtp from "../componet/layout/VerifyOtp"

function App() {

  return (
    <div>

      {/* <h1>home</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, a voluptate dolores iusto porro ipsam, rerum dolor officiis vel officia ex non minus, itaque quaerat illum incidunt consequuntur nobis exercitationem.</p>
      <button></button> */}
      {/* <Profilecard image = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fphoto-image-art&psig=AOvVaw3XZtPugY1BahGtnAdcs93l&ust=1758617779632000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJDPxLTy648DFQAAAAAdAAAAABAE" /> */}

      {/* <Profilecard image = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos&psig=AOvVaw3XZtPugY1BahGtnAdcs93l&ust=1758617779632000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJDPxLTy648DFQAAAAAdAAAAABAT" /> */}

      {/* <ProfileCard image ="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg" name= "james"/>

         
         <ProfileCard image = "http://images.pexels.com/photos/32504632/"  /> */}
      {/* <Hooks /> */}
      {/* <Header />
      <Button /> */}
      {/* <Product /> */}
      {/* <SignupForm /> */}
      {/* < Newsignup /> */}

      {/* <BrowserRouter>
 <Navbar />
<Routes>

  <Route path="/provider" element={<Provider />}>
  <Route element ={<h2>hello word</h2>}/>
  </Route>
  {/* <Route path="/" element={<Header  />} /> */}
      {/* <Route path="/product" element={<Product  />} />
      <Route path="/landing" element={<Landing  />} />

        <Route path="/profilrcard" element={<ProfileCard  />} />
    <Route path="/singleproduct/:id"  element={<Singleproduct  />} />


    <Route path="/dashboard/*"  element={<Dashboardlayout  />} />

   <Route path="/Addproduct" element={<Addproduct />} />
   <Route path="/Login" element={<Login />} />

</Routes> */}



      <BrowserRouter>
        <ProductProvider>
          <AuthProvider>

            <div>
              <Toaster richColors position="top-right" closeButton visibleToasts={3} />
              <Routes>
                <Route path="/*" element={<Publicpage />} />

                    <Route path="/forgetpassword" element = {<ForgotPassword/>}/>
                 <Route path="/verifyotp" element = {<VerifyOtp />}/>
                {/* <Route element={<ProtectedRoute />}> */}
                <Route path="/dashboard*" element={<Dashboardlayout />} />
                {/* </Route> */}
                <Route element={<Isadminprotected />}>
                  <Route path="/Admin*" element={<Adminlayout />} />

                </Route>

            
              </Routes>
            </div>
          </AuthProvider>
        </ProductProvider>
      </BrowserRouter>
    </div>
  )
}
export default App
