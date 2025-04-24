import { auth } from '@/auth';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { getOrderSummary } from '@/lib/actions/order.actions';
import { formatCurrency, formatDateTime, formatNumber } from '@/lib/utils';
import { BadgeDollarSign, Barcode, CreditCard, Users } from 'lucide-react';
import { Metadata } from 'next';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow.
} from '@/components/ui/table';
import Link from 'next/link';


export const metadata: Metadata = {
  title: 'Admin Dashboard',
};

const AdminOverviewPage = () => {
  return <>Overview</>;
};

export default AdminOverviewPage;
