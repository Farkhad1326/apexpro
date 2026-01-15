import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { CheckCircle, Package, Truck, Mail } from 'lucide-react';
import { Button } from '../../components/ui/shared/button';

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const location = useLocation();
  const orderData = location.state || {};

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-neon-green/20 rounded-full mb-4">
            <CheckCircle className="w-12 h-12 text-neon-green" />
          </div>
          <h1 className="text-4xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-gray-400 text-lg">Thank you for your purchase</p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-gray-400 text-sm mb-1">Order Number</p>
              <p className="text-white font-bold text-xl">{orderId}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Order Date</p>
              <p className="text-white font-medium">
                {orderData.orderDate
                  ? new Date(orderData.orderDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })
                  : 'Today'}
              </p>
            </div>
          </div>

          {orderData.shippingInfo && (
            <div className="border-t border-white/10 pt-6">
              <p className="text-gray-400 text-sm mb-2">Shipping Address</p>
              <p className="text-white">
                {orderData.shippingInfo.fullName}<br />
                {orderData.shippingInfo.address}<br />
                {orderData.shippingInfo.city}, {orderData.shippingInfo.state} {orderData.shippingInfo.zipCode}
              </p>
            </div>
          )}

          {orderData.orderTotal && (
            <div className="border-t border-white/10 pt-6 mt-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Total Paid</span>
                <span className="text-neon-green font-bold text-2xl">
                  ${orderData.orderTotal.toFixed(2)}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* What's Next */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-6">
          <h2 className="text-xl font-bold mb-6">What's Next?</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-neon-green/20 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-neon-green" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Order Confirmation Email</h3>
                <p className="text-gray-400 text-sm">
                  You'll receive an email confirmation with your order details shortly.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-neon-green/20 rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-neon-green" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Order Processing</h3>
                <p className="text-gray-400 text-sm">
                  We're preparing your order for shipment. This usually takes 1-2 business days.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-neon-green/20 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-neon-green" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Shipping Updates</h3>
                <p className="text-gray-400 text-sm">
                  Once shipped, you'll receive tracking information via email.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/store" className="flex-1">
            <Button className="w-full bg-neon-green text-black hover:bg-neon-green/80 font-bold">
              Continue Shopping
            </Button>
          </Link>
          <Link to="/dashboard" className="flex-1">
            <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
              Go to Dashboard
            </Button>
          </Link>
        </div>

        {/* Support */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Need help with your order?{' '}
            <Link to="/faq" className="text-neon-green hover:underline">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
