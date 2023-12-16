import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { SunIcon, UserIcon, SmartphoneIcon, GaugeIcon, AmpersandIcon, Moon, Sun, HomeIcon, BookIcon, CircleUserIcon, GithubIcon, XIcon, MenuIcon } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as React from "react";
import { useState } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { usePage, Link, Head } from "@inertiajs/react";
import { u as useTheme } from "../app.js";
import "axios";
import "react-dom/client";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Feature = ({
  title,
  description,
  icon
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-card p-6 border rounded-xl flex flex-col", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "self-start rounded-full w-9 h-9 flex items-center justify-center bg-foreground/5 dark:bg-foreground/10 [&>svg]:w-5 [&>svg]:h-5"
        ),
        children: icon
      }
    ),
    /* @__PURE__ */ jsx("h4", { className: "ml-1 mt-4 mb-1", children: title }),
    /* @__PURE__ */ jsx("p", { className: "ml-1 text-muted-foreground", children: description })
  ] });
};
const Features = () => {
  return /* @__PURE__ */ jsx("div", { className: "py-10", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h2", { children: "Features" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: [
      /* @__PURE__ */ jsx(
        Feature,
        {
          title: "Dark Mode Support",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam!",
          icon: /* @__PURE__ */ jsx(SunIcon, {})
        }
      ),
      /* @__PURE__ */ jsx(
        Feature,
        {
          title: "Authorization",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam!",
          icon: /* @__PURE__ */ jsx(UserIcon, {})
        }
      ),
      /* @__PURE__ */ jsx(
        Feature,
        {
          title: "Responsive",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam!",
          icon: /* @__PURE__ */ jsx(SmartphoneIcon, {})
        }
      ),
      /* @__PURE__ */ jsx(
        Feature,
        {
          title: "Lighthouse Optimized",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam!",
          icon: /* @__PURE__ */ jsx(GaugeIcon, {})
        }
      ),
      /* @__PURE__ */ jsx(
        Feature,
        {
          title: "Typography",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam!",
          icon: /* @__PURE__ */ jsx(AmpersandIcon, {})
        }
      )
    ] })
  ] }) });
};
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-4",
        lg: "h-10 rounded-md px-6 text-[0.925rem]",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const Logo = (props) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      ...props,
      viewBox: "0 0 316 316",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx("path", { d: "M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z" })
    }
  );
};
function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      onClick: () => setTheme(theme === "light" ? "dark" : "light"),
      variant: "ghost",
      size: "icon",
      className: "[&>svg]:w-5 [&>svg]:h-5",
      children: [
        theme === "light" ? /* @__PURE__ */ jsx(Moon, {}) : /* @__PURE__ */ jsx(Sun, {}),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle theme" })
      ]
    }
  );
}
const useRoutes = () => {
  return [
    {
      href: "/",
      label: "Home",
      icon: HomeIcon
    },
    {
      href: "/about",
      label: "About",
      icon: BookIcon
    }
  ];
};
const MobileMenuItem = ({
  label,
  Icon,
  href
}) => {
  const { url } = usePage();
  return /* @__PURE__ */ jsxs(
    Link,
    {
      href,
      className: cn(
        "w-full flex items-center space-x-4 px-5 h-14 font-medium rounded-md [&>svg]:w-5 [&>svg]:h-5",
        url === href && "bg-foreground/5 dark:bg-foreground/10"
      ),
      children: [
        /* @__PURE__ */ jsx(Icon, {}),
        /* @__PURE__ */ jsx("span", { children: label })
      ]
    }
  );
};
const MobileMenu = () => {
  const routes = useRoutes();
  return /* @__PURE__ */ jsx("div", { className: "sm:hidden absolute top-[60px] py-6 w-full bg-background border-b shadow", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    routes.map(({ href, label, icon }) => /* @__PURE__ */ jsx(
      MobileMenuItem,
      {
        label,
        href,
        Icon: icon
      },
      href
    )),
    /* @__PURE__ */ jsx(
      MobileMenuItem,
      {
        label: "Sign In",
        href: "/login",
        Icon: CircleUserIcon
      }
    )
  ] }) }) });
};
const Header = () => {
  const { url } = usePage();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const routes = useRoutes();
  return /* @__PURE__ */ jsxs("header", { className: "fixed top-0 left-0 right-0 h-[60px] border-b bg-background", children: [
    isMenuOpen && /* @__PURE__ */ jsx(MobileMenu, {}),
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "h-full flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(Link, { href: "/", className: "mr-8", children: /* @__PURE__ */ jsx(Logo, { className: "w-6 h-6 fill-foreground" }) }),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:flex items-center space-x-6", children: routes.map(({ href, label }) => /* @__PURE__ */ jsx(
          Link,
          {
            href,
            className: cn(
              "hover:text-foreground font-medium",
              url === href ? "text-foreground" : "text-muted-foreground"
            ),
            children: label
          },
          href
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(ThemeSwitcher, {}),
          /* @__PURE__ */ jsx(Button, { size: "icon", variant: "ghost", children: /* @__PURE__ */ jsx(GithubIcon, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "icon",
              variant: "ghost",
              className: "sm:hidden",
              onClick: () => setMenuOpen((prev) => !prev),
              children: isMenuOpen ? /* @__PURE__ */ jsx(XIcon, {}) : /* @__PURE__ */ jsx(MenuIcon, {})
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:flex items-center space-x-3", children: /* @__PURE__ */ jsx(Button, { size: "sm", children: "Sign In" }) })
      ] })
    ] }) })
  ] });
};
function AppLayout({
  children,
  pageTitle
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Head, { title: pageTitle }),
    /* @__PURE__ */ jsx("main", { className: "pt-[60px]", children })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "py-10 border-b", children: /* @__PURE__ */ jsxs("div", { className: "container flex flex-col", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-center sm:text-left", children: "Inertia Typescript Starter Template" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl text-lg text-muted-foreground text-center sm:text-left", children: "This starter template combines Laravel, Inertia, Typescript, React, Tailwind and shadcn/ui library. All preconfigured and ready to take flight." }),
      /* @__PURE__ */ jsx(
        Button,
        {
          size: "lg",
          className: "mt-6 rounded-full self-center sm:self-start",
          asChild: true,
          children: /* @__PURE__ */ jsx("a", { href: "#", target: "_blank", children: /* @__PURE__ */ jsx("span", { children: "Use Template" }) })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Features, {})
  ] });
}
Index.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { pageTitle: "Homepage", children: page });
export {
  Index as default
};
