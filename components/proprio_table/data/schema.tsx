import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const RoomSchemma = z.object({
  id: z.number(),
  Room_type: z.string(),
  Room_number: z.number(),
  Room_status: z.string(),
  Return_status:z.string(),
  Room_classe:z.string(),
  Reservation_Status:z.string()
})

export type Room = z.infer<typeof RoomSchemma>