import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ShieldLoading extends StatelessWidget {
  const ShieldLoading({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ShieldLoading.svg');
}
