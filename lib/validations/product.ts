import * as z from "zod";

export const productSchema = z.object({
  // Basic Info (Step 1)
  name: z.string().min(3, "Product name must be at least 3 characters"),
  price: z
    .string()
    .min(1, "Price is required")
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) > 0,
      "Price must be a positive number"
    ),
  salePrice: z
    .string()
    .optional()
    .refine(
      (val) => !val || (!isNaN(Number(val)) && Number(val) > 0),
      "Sale price must be a positive number"
    ),
  category: z.string().min(1, "Category is required"),
  subcategory: z.string().optional(),
  style: z.string().min(1, "Style is required"),
  material: z.string().min(1, "Material is required"),
  color: z.string().min(1, "Color is required"),
  badge: z.string().optional(),
  image: z.string().url("Must be a valid URL").min(1, "Main image is required"),
  images: z.array(z.string().url()).optional(),

  // Product Details (Step 2)
  brand: z.string().optional(),
  description: z.string().optional(),
  dimensions: z
    .object({
      width: z.string().optional(),
      height: z.string().optional(),
      depth: z.string().optional(),
      unit: z.enum(["inches", "cm"]).default("inches"),
    })
    .optional(),
  weight: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Number(val)), "Weight must be a number"),
  materials: z.array(z.string()).optional(),
  colors: z.array(z.any()).optional(),
  styles: z.array(z.string()).optional(),
  assemblyRequired: z.boolean().default(false),
  assemblyTime: z.string().optional(),
  warranty: z.string().optional(),

  // Inventory (Step 3)
  inStock: z.boolean().default(true),
  rating: z.string().default("0"),
  reviews: z.string().default("0"),
  sku: z.string().optional(),
  featured: z.boolean().default(false),
  newArrival: z.boolean().default(false),
  bestseller: z.boolean().default(false),

  // Shipping (Step 4)
  freeShipping: z.boolean().default(false),
  estimatedDelivery: z.string().optional(),
  shippingCost: z
    .string()
    .optional()
    .refine(
      (val) => !val || !isNaN(Number(val)),
      "Shipping cost must be a number"
    ),
  whiteGloveDelivery: z.boolean().default(false),
  tags: z.array(z.string()).optional(),
  careInstructions: z.string().optional(),
});

export type ProductFormData = z.infer<typeof productSchema>;
