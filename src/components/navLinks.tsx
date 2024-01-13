"use client"

import * as React from "react" 
import Link from "next/link"
import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tops",
    href: "#",
    description:
      "step into effortless style with our Tops collection. chic, comfortable, and alwqays on trend.",
  },
  {
    title: "Pants",
    href: "#",
    description:
      "step into effortless style with our Pants collection. chic, comfortable, and alwqays on trend.",
  },
  {
    title: "Accessories/Jewelry",
    href: "#",
    description:
      "step into effortless style with our Jewelry collection. chic, comfortable, and alwqays on trend.",
  },
  {
    title: "Shoes",
    href: "#",
    description:
      "step into effortless style with our collection of top-notch Shoes. chic, comfortable, and alwqays on trend.",
  },
]

const Components: { title: string; href: string; description: string }[] = [
    {
      title: "Shirt",
      href: "#",
      description:
        "step into effortless style with our Shirts collection. chic, comfortable, and alwqays on trend.",
    },
    {
      title: "Pants",
      href: "#",
      description:
        "step into effortless style with our Pants collection. chic, comfortable, and alwqays on trend.",
    },
    {
      title: "Accessories/",
      href: "#",
      description:
        "step into effortless style with our Watches collection. chic, comfortable, and alwqays on trend.",
    },
    {
      title: "Shoes",
      href: "#",
      description:
        "step into effortless style with our collection of top-notch Shoes. chic, comfortable, and alwqays on trend.",
    },
  ]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Women</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Mens</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
              {Components.map((Components) => (
                <ListItem
                  key={Components.title}
                  title={Components.title}
                  href={Components.href}
                >
                  {Components.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none group-hover:hover:text-myRedColour">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground  group-hover:text-myBlackPara">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
