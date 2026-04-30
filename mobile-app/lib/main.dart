import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:go_router/go_router.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await EasyLocalization.ensureInitialized();

  runApp(
    EasyLocalization(
      supportedLocales: [
        Locale('en'),
        Locale('ar'),
        Locale('de'),
      ],
      path: 'assets/translations',
      fallbackLocale: Locale('en'),
      child: ProviderScope(
        child: MyApp(),
      ),
    ),
  );
}

class MyApp extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return MaterialApp.router(
      title: 'AutoOne',
      theme: ThemeData(
        primaryColor: Color(0xFF0066cc),
        useMaterial3: true,
      ),
      localizationsDelegates: context.localizationDelegates,
      supportedLocales: context.supportedLocales,
      locale: context.locale,
      routerConfig: _router,
    );
  }
}

final _router = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => HomeScreen(),
    ),
    GoRoute(
      path: '/workshops',
      builder: (context, state) => WorkshopsScreen(),
    ),
    GoRoute(
      path: '/car-wash',
      builder: (context, state) => CarWashScreen(),
    ),
    GoRoute(
      path: '/bookings',
      builder: (context, state) => BookingsScreen(),
    ),
  ],
);

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('AutoOne'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Welcome to AutoOne Mobile', style: TextStyle(fontSize: 24)),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () => context.go('/workshops'),
              child: Text('Browse Workshops'),
            ),
            ElevatedButton(
              onPressed: () => context.go('/car-wash'),
              child: Text('Car Wash Services'),
            ),
          ],
        ),
      ),
    );
  }
}

class WorkshopsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Workshops')),
      body: Center(child: Text('Workshops coming soon')),
    );
  }
}

class CarWashScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Car Wash')),
      body: Center(child: Text('Car Wash booking coming soon')),
    );
  }
}

class BookingsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('My Bookings')),
      body: Center(child: Text('Your bookings coming soon')),
    );
  }
}
