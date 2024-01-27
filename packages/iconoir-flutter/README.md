# Iconoir - Flutter

[![Pub Version](https://img.shields.io/pub/v/iconoir_flutter?style=flat-square)](https://pub.dev/packages/iconoir_flutter)
[![Pub Popularity](https://img.shields.io/pub/popularity/iconoir_flutter?style=flat-square)](https://pub.dev/packages/iconoir_flutter/score)
[![License](https://img.shields.io/github/license/iconoir-icons/iconoir?style=flat-square)](https://github.com/iconoir-icons/iconoir/blob/main/packages/iconoir-flutter/LICENSE)

[Iconoir](https://iconoir.com/) is an open-source library with 1300+ unique SVG icons, designed on a 24x24 pixels grid. No premium icons, no email sign-up, no newsletters.

`iconoir_flutter` is an open source package that exports these icons as Flutter widgets (`flutter_svg`) that can be used in all of your Flutter projects.

## Installation

```
flutter pub add iconoir_flutter
```

## Usage

```dart
import 'package:flutter/material.dart';
import 'package:iconoir_flutter/iconoir_flutter.dart';

void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({ super.key });

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: DemoPage(),
    );
  }
}

class DemoPage extends StatelessWidget {
  const DemoPage({ super.key });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: const Iconoir(),
      ),
    );
  }
}
```

Default values for the most common props are given below:

| Prop name | Default value  |
| --------- | -------------- |
| color     | "currentColor" |
| width     | "1.5em"        |
| height    | "1.5em"        |

## Icon names

The Flutter widges are named as PascalCase variations of their reference names (i.e. `airplane-helix-45deg` becomes `AirplaneHelix45deg`).
