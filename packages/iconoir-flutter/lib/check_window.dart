import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CheckWindow extends StatelessWidget {
  const CheckWindow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/CheckWindow.svg');
}
