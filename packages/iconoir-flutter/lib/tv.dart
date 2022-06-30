import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Tv extends StatelessWidget {
  const Tv({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Tv.svg');
}
