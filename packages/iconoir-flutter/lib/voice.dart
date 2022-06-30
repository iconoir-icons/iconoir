import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Voice extends StatelessWidget {
  const Voice({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Voice.svg');
}
