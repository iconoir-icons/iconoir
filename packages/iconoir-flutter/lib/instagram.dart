import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Instagram extends StatelessWidget {
  const Instagram({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Instagram.svg');
}
