import { useState } from 'react'
import { RadioGroup, Tab } from '@headlessui/react'
import Image from 'next/image'
import products from '../../util/merchandise'

const product = {
    name: 'Merchandise',
    price: 'Rs. 500',
    images: [
        {
            id: 1,
            name: 'Angled view',
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
            alt: 'Angled front view with bag zipped and handles upright.',
        },
        {
            id: 2,
            name: 'Angled view',
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
            alt: 'Angled front view with bag zipped and handles upright.',
        }
    ],
    colors: [
        { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
        { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
        { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
    ],
    description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Merchandise() {
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [imageIndex, setImageIndex] = useState(0)

    return (
        <div className="bg-white dark:bg-black">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                    {/* Image gallery */}
                    <Tab.Group as="div" className="flex flex-col-reverse">
                        {/* Image selector */}
                        <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                            <Tab.List className="grid grid-cols-4 gap-6">
                                {products.color_images[imageIndex].map((image) => (
                                    <Tab
                                        key={image.id}
                                        className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span className="sr-only">{image.name}</span>
                                                <div className="absolute inset-0 rounded-md overflow-hidden">
                                                    <Image layout='fill' src={image.src} alt="" className="w-full h-full object-center object-cover" />
                                                </div>
                                                <span
                                                    className={classNames(
                                                        selected ? 'ring-indigo-500' : 'ring-transparent',
                                                        'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </>
                                        )}
                                    </Tab>
                                ))}
                            </Tab.List>
                        </div>

                        <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                            {products.color_images[imageIndex].map((image) => (
                                <Tab.Panel key={image.id}>
                                    <div className=''>
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            layout='fill'
                                            className="w-full h-full object-center object-cover sm:rounded-lg"
                                        />
                                    </div>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>

                    {/* Product info */}
                    <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-20">
                        <h1 className="text-3xl font-extrabold tracking-tight text-black dark:text-white">{product.name}</h1>

                        <div className="mt-3">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl text-black dark:text-white">{product.price}</p>
                        </div>



                        <div className="mt-6">
                            <h3 className="sr-only">Description</h3>

                            <div
                                className="text-base text-black dark:text-white space-y-6"
                                dangerouslySetInnerHTML={{ __html: product.description }}
                            />
                        </div>

                        <div className="mt-6">
                            {/* Colors */}
                            <div>
                                <h3 className="text-sm text-black dark:text-white">Color</h3>

                                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                                    <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                                    <div className="flex items-center space-x-3">
                                        {products.colors.map((color) => (
                                            <RadioGroup.Option
                                                key={color.name}
                                                value={color}
                                                className={({ active, checked }) =>
                                                    classNames(
                                                        color.selectedColor,
                                                        active && checked ? 'ring ring-offset-1' : '',
                                                        !active && checked ? 'ring-2' : '',
                                                        '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                                    )
                                                }
                                            >
                                                <RadioGroup.Label as="p" className="sr-only">
                                                    {color.name}
                                                </RadioGroup.Label>
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        color.bgColor,
                                                        'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                                    )}
                                                    onClick={()=>{setImageIndex(color.index)}}
                                                />
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="mt-10 flex sm:flex-col1">
                                <button
                                    type="submit"
                                    className="max-w-xs flex-1 bg-tyrian-purple border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:border-indigo-700 hover:bg-[#7b0c49] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                                >
                                    Buy Now!!!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}