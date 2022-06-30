import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Facebook extends StatelessWidget {
  const Facebook({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Facebook.svg');
}
