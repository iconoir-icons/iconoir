import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SelectWindow extends StatelessWidget {
  const SelectWindow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/SelectWindow.svg');
}
