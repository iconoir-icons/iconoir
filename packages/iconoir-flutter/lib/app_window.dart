import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AppWindow extends StatelessWidget {
  const AppWindow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/AppWindow.svg');
}
