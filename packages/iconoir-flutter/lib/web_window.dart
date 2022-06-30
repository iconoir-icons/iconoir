import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class WebWindow extends StatelessWidget {
  const WebWindow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/WebWindow.svg');
}
