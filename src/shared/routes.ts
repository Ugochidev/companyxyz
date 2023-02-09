import { Router } from "express";
import authRoutes from "../modules/users/routes/auth.routes";
import userRoutes from "../modules/users/routes/users.routes"
import walletRoutes from "../modules/wallet/routes/wallet.routes";
import beneficiaryRoutes from "../modules/beneficiary/routes/beneficiary.routes";
import cardRoutes from "../modules/card/routes/card.routes"
import transactionRoutes from "../modules/transaction/routes/transaction.routes"
import billsRoutes from "../modules/Bills/routes/bills.routes"

const router = Router();

router.use("/auth", authRoutes);
router.use("/wallet", walletRoutes)
router.use("/beneficiary", beneficiaryRoutes)
router.use("/card", cardRoutes)
router.use("/transaction", transactionRoutes)
router.use("/user", userRoutes)
router.use("/bills", billsRoutes);

export default router;
