import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ErrorWindow extends StatelessWidget {
  const ErrorWindow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ErrorWindow.svg');
}
