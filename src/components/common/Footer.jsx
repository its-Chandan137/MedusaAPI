import LogoImg from "../../assets/common/medusa.png";
import { BodyOne, Caption, CustomLink, Title } from "./CustomComponents";


export const Footer = () => {
   return (
     <>
        <footer className="py-14">
            <div className="container grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <img src={LogoImg} alt="LogoImg" className="h-7" />

                    <div className="flex flex-col gap-4 mt-5 mb-2">
                        <Caption>Address : 233 Rajoli Street, Kasol</Caption>
                        <Caption>Email : itschandan137@gmail.com</Caption>
                        <Caption>Call : 7327-020-XXX</Caption>
                    </div>
                    <hr className="mb-2"/>
                    <BodyOne>Subscribe to our Newsletter</BodyOne>
                    <input type="text"
                    className="p-3 w-full border bg-white-100 border-gray-300 rounded-md outline-none"
                    placeholder="Your Email"
                    />
                </div>
                <div>
                    <Title level={5}>Our Stores</Title>
                    <div className="flex flex-col gap-4">
                        <CustomLink>Normal</CustomLink>
                        <CustomLink>Shop With Sidebar</CustomLink>
                        <CustomLink>Shop With Category</CustomLink>
                        <CustomLink>Shop Filters Top Bar</CustomLink>
                        <CustomLink>Shop Wide</CustomLink>
                        <CustomLink>My Account</CustomLink>
                    </div>
                </div>
                <div>
                    <Title level={5}>Useful Links</Title>
                    <div className="flex flex-col gap-4">
                        <CustomLink>Normal</CustomLink>
                        <CustomLink>Shop With Sidebar</CustomLink>
                        <CustomLink>Shop With Category</CustomLink>
                        <CustomLink>Shop Filters Top Bar</CustomLink>
                        <CustomLink>Shop Wide</CustomLink>
                        <CustomLink>My Account</CustomLink>
                    </div>
                </div>
                <div>
                    <Title level={5}>Our Blog</Title>
                    <div className="flex flex-col gap-4">
                        <CustomLink>Normal</CustomLink>
                        <CustomLink>Shop With Sidebar</CustomLink>
                        <CustomLink>Shop With Category</CustomLink>
                        <CustomLink>Shop Filters Top Bar</CustomLink>
                        <CustomLink>Shop Wide</CustomLink>
                        <CustomLink>My Account</CustomLink>
                    </div>
                </div>
            </div>
        </footer>
     </>
   )
 }
 