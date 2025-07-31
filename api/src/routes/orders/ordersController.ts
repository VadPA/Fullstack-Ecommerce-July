import { Response, Request } from 'express';
import { orderItemsTable, ordersTable } from '../../db/ordersSchema.js';
import { db } from '../../db/index.js';

export async function createOrder(req: Request, res: Response) {
  try {
    const { order, items } = req.cleanBody;
    const userId = Number(req.userId);
    console.log(userId);
    if (!userId) {
      res.status(400).json({ message: 'Invalid order data' });
    }
    const [newOrder] = await db
      .insert(ordersTable)
      .values({ userId: userId })
      .returning();

    // TODO: validate products ids, and take their actual price from db
    const orderItems = items.map((item: any) => ({
      ...item,
      orderId: newOrder.id,
    }));
    const newOrderItems = await db
      .insert(orderItemsTable)
      .values(orderItems)
      .returning();
    res.status(201).json({ ...newOrder, items: newOrderItems });
  } catch (error) {
    res.status(400).json({ message: 'Invalid order data' });
  }
}
