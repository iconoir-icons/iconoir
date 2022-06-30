## Flutter Iconoir Icons

![PUB Version](https://img.shields.io/pub/v/iconoir_flutter?style=flat-square)
![PUB Monthly Downloads](https://img.shields.io/pub/dm/iconoir_flutter?style=flat-square)
![PUB License](https://img.shields.io/npm/l/iconoir_flutter?style=flat-square)

Iconoir is an open source library with 900+ SVG Icons. No premium icons, no email sign-up, no newsletters. You can browse the full suite of icons at [iconoir.com](https://iconoir.com/).

`iconoir_flutter` is an open source package that exports these icons as Flutter widgets (`flutter_svg`) that can be used in all of your Flutter projects.

### Installation

```
flutter pub add iconoir_flutter
```

### Usage

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

| Prop name   | Default value  |
| ----------- | -------------- |
| color       | "currentColor" |
| width       | "1.5em"        |
| height      | "1.5em"        |
| strokeWidth | 1.5            |
| fill         | "none"         |


### Icon names

For the most part, the Flutter widgets are named as PascalCase variations of their reference names (i.e. `add-circle-outline` becomes `AddCircleOutline`). However, some names have been altered slightly either because they start with numerical digits, which would lead to invalid Flutter widgets names, or because they are organisations which use PascalCase in their brand names, such as `GitHub`. The altered names are as follows:

| Iconoir Name     | Flutter Widgets |
| ---------------- | --------------- |
| `1st-medal`      | `Medal1St`      |
| `4k-display`     | `Display4K`     |
| `4x4-cell`       | `Cell4X4`       |
| `360-view`       | `View360`       |
| `github`         | `GitHub`        |
| `github-outline` | `GitHubOutline` |
| `gitlab-full`    | `GitLabFull`    |
| `linkedin`       | `LinkedIn`      |
| `tiktok`         | `TikTok`        |
| `youtube`        | `YouTube`       |
