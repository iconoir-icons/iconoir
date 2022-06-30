import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Network extends StatelessWidget {
  const Network({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Network.svg');
}
