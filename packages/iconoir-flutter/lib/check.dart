import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Check extends StatelessWidget {
  const Check({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Check.svg');
}
