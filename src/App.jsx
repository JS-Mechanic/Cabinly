import {lazy, Suspense} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const Bookings = lazy(() => import("./pages/Bookings.jsx"));
const Cabins = lazy(() => import("./pages/Cabins.jsx"));
const Users = lazy(() => import("./pages/Users.jsx"));
const Settings = lazy(() => import("./pages/Settings.jsx"));
const Account = lazy(() => import("./pages/Account.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));
const AppLayout = lazy(() => import("./ui/AppLayout.jsx"));
const Booking = lazy(() => import("./pages/Booking.jsx"));
const CheckIn = lazy(() => import("./pages/CheckIn.jsx"));
const ProtectedRoute = lazy(() => import("./ui/ProtectedRoute.jsx"));

import GlobalStyles from "./styles/GlobalStyles.js";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {Toaster} from "react-hot-toast";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<GlobalStyles />
			<BrowserRouter>
				<Suspense fallback={null}>
					<Routes>
						<Route
							element={
								<ProtectedRoute>
									<AppLayout />
								</ProtectedRoute>
							}>
							<Route index element={<Navigate replace to="/dashboard" />} />
							<Route path="dashboard" element={<Dashboard />} />
							<Route path="bookings" element={<Bookings />} />
							<Route path="bookings/:bookingId" element={<Booking />} />
							<Route path="checkin/:bookingId" element={<CheckIn />} />
							<Route path="cabins" element={<Cabins />} />
							<Route path="users" element={<Users />} />
							<Route path="settings" element={<Settings />} />
							<Route path="account" element={<Account />} />
						</Route>
						<Route path="login" element={<Login />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
			<Toaster
				position="top-center"
				gutter={12}
				containerStyle={{margin: "8px"}}
				toastOptions={{
					success: {duration: 3000},
					error: {duration: 5000},
					style: {
						fontSize: "16px",
						maxWidth: "500px",
						padding: "16px 24px",
						backgroundColor: "var(--color-grey-0)",
						color: "var(--color-grey-700)",
					},
				}}
			/>
		</QueryClientProvider>
	);
}
