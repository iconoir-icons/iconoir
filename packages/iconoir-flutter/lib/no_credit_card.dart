import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class NoCreditCard extends StatelessWidget {
  const NoCreditCard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/NoCreditCard.svg');
}
