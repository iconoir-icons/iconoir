import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LogDenied extends StatelessWidget {
  const LogDenied({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/LogDenied.svg');
}
