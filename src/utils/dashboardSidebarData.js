import { AiOutlineStock } from "react-icons/ai";
import { MdManageHistory } from "react-icons/md";
import { CgShutterstock } from "react-icons/cg";
import { FaProductHunt } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import { FaServicestack, FaUsers } from "react-icons/fa6";
import { MdOutlineCategory } from "react-icons/md";
import { TbBrandAirbnb } from "react-icons/tb";
import { MdOutlinePermMedia } from "react-icons/md";
import { FaDelicious } from "react-icons/fa";
import { SiPrivatedivision } from "react-icons/si";
import { LiaBlogSolid } from "react-icons/lia";
import { CiCompass1 } from "react-icons/ci";
import { FaQuestion } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { BsFillFileEarmarkRuledFill } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import { GiVerticalBanner } from "react-icons/gi";
import { FaFeather } from "react-icons/fa";
import { SiJetpackcompose } from "react-icons/si";
import { MdDiscount } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { PiStudentBold } from "react-icons/pi";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { MdCoPresent } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";

export const privateRouteNames = [
  "Services",
  "Category",
  "Delivery",
  "Customer",
  "Users",
  "Company rules",
  "Company names",
  "Banners",
];

export const SidebarItemsData = [
  {
    id: 1,
    name: "dashboard",
    path: "/",
    Icon: <MdOutlineDashboard size={24} />,
  },
  {
    id: 2,
    name: "Companies",
    path: "/companies/all-companies",
    Icon: <PiStudentBold size={24} />,
  },
  {
    id: 7,
    name: "Students",
    path: "/students",
    Icon: <PiStudentBold size={24} />,
    sub: [
      {
        id: 1,
        name: "All Students",
        path: "/students/add-student",
        Icon: <IoPersonAddSharp />,
      },
      {
        id: 2,
        name: "Manage-students",
        path: "/students/manage-student",
        Icon: <MdManageAccounts />,
      },
      {
        id: 3,
        name: "Attendance student",
        path: "/students/attendance-student",
        Icon: <MdCoPresent />,
      },
    ],
  },
  {
    id: 2,
    name: "Products",
    path: "/dashboard/admin/Products",
    Icon: <FaProductHunt size={24} />,
    sub: [
      {
        id: 1,
        name: "All products",
        path: "/dashboard/admin/products/all-products",
        Icon: <CiBasketball />,
      },
      {
        id: 5,
        name: "Unit",
        path: "/dashboard/admin/products/unit",
        Icon: <MdManageHistory />,
      },
      {
        id: 5,
        name: "Type",
        path: "/dashboard/admin/products/type",
        Icon: <MdManageHistory />,
      },
      {
        id: 6,
        name: "Variant",
        path: "/dashboard/admin/products/variant",
        Icon: <MdManageHistory />,
      },
      {
        id: 6,
        name: "Assigned Variant",
        path: "/dashboard/admin/products/assigned-variants",
        Icon: <MdManageHistory />,
      },
      {
        id: 7,
        name: "Brands",
        path: "/dashboard/admin/products/brands",
        Icon: <TbBrandAirbnb />,
      },
      {
        id: 8,
        name: "Size chart",
        path: "/dashboard/admin/products/size-chart",
        Icon: <TbBrandAirbnb />,
      },
    ],
  },
  {
    id: 3,
    name: "Category",
    path: "/category",
    Icon: <MdOutlineCategory size={24} />,
    sub: [
      {
        id: 1,
        name: " Primary Category",
        path: "/dashboard/admin/category/primary-category",
        Icon: <CiBasketball />,
      },
      {
        id: 2,
        name: "Secondary category",
        path: "/dashboard/admin/category/secondary-category",
        Icon: <MdManageHistory />,
      },
      {
        id: 3,
        name: "tertiary category",
        path: "/dashboard/admin/category/tertiary-category",
        Icon: <MdManageHistory />,
      },
      {
        id: 4,
        name: "Assigned categories",
        path: "/dashboard/admin/category/assigned-categories",
        Icon: <MdManageHistory />,
      },
    ],
  },
  {
    id: 4,
    name: "Features Products",
    path: "/dashboard/admin/features",
    Icon: <FaFeather size={24} />,
    sub: [
      {
        id: 1,
        name: "Features products",
        path: "/dashboard/admin/features/features-products",
        Icon: <TbBrandAirbnb />,
      },
      {
        id: 2,
        name: "Assigned features products",
        path: "/dashboard/admin/features/assigned-features-products",
        Icon: <TbBrandAirbnb />,
      },
    ],
  },

  {
    id: 5,
    name: "Stock",
    path: "/dashboard/admin/stock",
    Icon: <CgShutterstock size={24} />,
    sub: [
      {
        id: 1,
        name: " Stock Products",
        path: "/dashboard/admin/stock/stock-products",
        Icon: <AiOutlineStock />,
      },
      {
        id: 2,
        name: "Stock Product History",
        path: "/dashboard/admin/stock/stock-history",
        Icon: <MdManageHistory />,
      },
      {
        id: 2,
        name: "Sales Stock History",
        path: "/dashboard/admin/stock/sales-stock-history",
        Icon: <MdManageHistory />,
      },
    ],
  },
  {
    id: 6,
    name: "Delivery",
    path: "/dashboard/admin/delivery",
    Icon: <FaDelicious size={24} />,
    sub: [
      {
        id: 1,
        name: "Division",
        path: "/dashboard/admin/delivery/division",
        Icon: <SiPrivatedivision />,
      },
      {
        id: 2,
        name: "District",
        path: "/dashboard/admin/delivery/district",
        Icon: <MdManageHistory />,
      },
      {
        id: 3,
        name: "Sub District",
        path: "/dashboard/admin/delivery/sub-district",
        Icon: <MdManageHistory />,
      },
      {
        id: 4,
        name: "Delivery charge",
        path: "/dashboard/admin/delivery/delivery-charge",
        Icon: <MdManageHistory />,
      },
    ],
  },
  {
    id: 9,
    name: "Pos",
    path: "/dashboard/admin/pos",
    Icon: <SiJetpackcompose size={24} />,
  },
  {
    id: 10,
    name: "Users",
    path: "/dashboard/admin/users",
    Icon: <FaUsers size={24} />,
    sub: [
      {
        id: 1,
        name: "All  Users",
        path: "/dashboard/admin/users/users-info",
        Icon: <FaUserFriends />,
      },
    ],
  },
  {
    id: 11,
    name: "Blogs",
    path: "/dashboard/admin/blogs",
    Icon: <LiaBlogSolid size={24} />,
    sub: [
      {
        id: 1,
        name: "Blogs",
        path: "/dashboard/admin/blogs/blogs",
        Icon: <TbBrandAirbnb />,
      },
      {
        id: 2,
        name: "Blogs categories",
        path: "/dashboard/admin/blogs/blogs-category",
        Icon: <TbBrandAirbnb />,
      },
    ],
  },
  {
    id: 12,
    name: "Faqs",
    path: "/dashboard/admin/Faqs",
    Icon: <FaQuoteLeft size={24} />,
    sub: [
      {
        id: 1,
        name: "Faqs",
        path: "/dashboard/admin/faqs",
        Icon: <FaQuestion sizCiCompass1e={24} />,
      },
      {
        id: 2,
        name: "Assigned Faqs",
        path: "/dashboard/admin/faqs/assigned-faqs",
        Icon: <TbBrandAirbnb />,
      },
      {
        id: 3,
        name: " Product Questions Faqs ",
        path: "/dashboard/admin/faqs/faqs-questions",
        Icon: <FaQuestion sizCiCompass1e={24} />,
      },
      {
        id: 4,
        name: " Product Questions Assigned Faqs",
        path: "/dashboard/admin/faqs/faqs-questions-assigned",
        Icon: <TbBrandAirbnb />,
      },
    ],
  },
  {
    id: 13,
    name: "Company Rules",
    path: "/dashboard/admin/company-rule",
    Icon: <BsFillFileEarmarkRuledFill size={24} />,
    sub: [
      {
        id: 1,
        name: "Privacy Policy",
        path: "/dashboard/admin/company-rules/privacy-policy",
        Icon: <FaQuestion sizCiCompass1e={24} />,
      },
      {
        id: 2,
        name: "Refund Return Policy",
        path: "/dashboard/admin/company-rules/refund-return-policy",
        Icon: <TbBrandAirbnb />,
      },
      {
        id: 3,
        name: "Trams Condition",
        path: "/dashboard/admin/company-rules/trams-condition",
        Icon: <FaQuestion sizCiCompass1e={24} />,
      },
    ],
  },
  {
    id: 14,
    name: "Discount Management",
    path: "/dashboard/admin/",
    Icon: <MdDiscount size={24} />,
    sub: [
      {
        id: 1,
        name: "Overall-discount",
        path: "/dashboard/admin/discount-management/overall-discount",
        Icon: <FaQuestion sizCiCompass1e={24} />,
      },
      {
        id: 2,
        name: "percentage-discount",
        path: "/dashboard/admin/discount-management/percentage-discount",
        Icon: <TbBrandAirbnb />,
      },
      {
        id: 3,
        name: "Active-inactive",
        path: "/dashboard/admin/discount-management/active-inactive",
        Icon: <FaQuestion sizCiCompass1e={24} />,
      },
    ],
  },

  {
    id: 15,
    name: "media",
    path: "/dashboard/admin/media",
    Icon: <MdOutlinePermMedia size={24} />,
  },
  {
    id: 16,
    name: "Company names",
    path: "/dashboard/admin/company-name",
    Icon: <CiCompass1 sizCiCompass1e={24} />,
  },
  {
    id: 17,
    name: "Banners",
    path: "/dashboard/admin/banners",
    Icon: <GiVerticalBanner sizCiCompass1e={24} />,
  },
  {
    id: 18,
    name: "Settings ",
    path: "/dashboard/admin/settings",
    Icon: <CiSettings sizCiCompass1e={24} />,
    sub: [
      {
        id: 1,
        name: "Account",
        path: "/dashboard/admin/settings/account",
        Icon: <CiSettings sizCiCompass1e={24} />,
      },
      {
        id: 2,
        name: "license",
        path: "/dashboard/admin/settings/license",
        Icon: <CiSettings sizCiCompass1e={24} />,
      },
    ],
  },
];
